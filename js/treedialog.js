define([
		'jquery',
　　　　'dialog',
　　　　'ztree'
		
　　　　],

　　　　function($, dialog, ztree){
　　　　　　var treedialog = function(title, znodes, callback) {
				var id;

				function showTree() {
				        var znodes_defaults =[
							{id:1, pId:0, name:"[core] 基本功能 演示", open:true},
							{id:101, pId:1, name:"最简单的树 --  标准 JSON 数据", file:"core/standardData"},
							{id:102, pId:1, name:"最简单的树 --  简单 JSON 数据", file:"core/simpleData"},
							{id:6, pId:0, name:"其他扩展功能 演示", open:false},
							{id:601, pId:6, name:"隐藏普通节点", file:"exhide/common"},
							{id:602, pId:6, name:"配合 checkbox 的隐藏", file:"exhide/checkbox"},
							{id:603, pId:6, name:"配合 radio 的隐藏", file:"exhide/radio"}
						];
						znodes = znodes?znodes:znodes_defaults;
						var zTree;
						var setting = {
							view: {
								dblClickExpand: false,
								showLine: true,
								selectedMulti: false
							},
							data: {
								simpleData: {
									enable:true,
									idKey: "id",
									pIdKey: "pId",
									rootPId: ""
								}
							},
							callback: {
								beforeClick: function(treeId, treeNode) {
									var zTree = $.fn.zTree.getZTreeObj("tree");
									if (treeNode.isParent) {
										zTree.expandNode(treeNode);
										return false;
									} else {
										demoIframe.attr("src",treeNode.file + ".html");
										return true;
									}
								}
							}
						};


						var t = $("#tree");
						t = $.fn.zTree.init(t, setting, znodes);
						// demoIframe = $("#testIframe");
						// demoIframe.bind("load", loadReady);
						var zTree = $.fn.zTree.getZTreeObj("tree");
						//zTree.selectNode(zTree.getNodeByParam("id", 101));						
				}

				function clickOk() {
					var ztree = $.fn.zTree.getZTreeObj("tree");
					var id = ztree.getSelectedNodes()[0].id;
					callback(id);
				}
				
				var d = dialog({
				    title: title,
				    content: '<div><ul id="tree" class="ztree" /></div>',
				    onshow: showTree,
				    ok: clickOk,
				    cancel: function(){}
				});
				d.showModal();
				

			}
			return treedialog;
　　　　}
　　);




