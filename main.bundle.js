webpackJsonp([1,5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(639),
            styles: [__webpack_require__(629)]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_pass_node_info_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_node_info__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkComponent = /** @class */ (function () {
    function NetworkComponent(pNodeInfoService) {
        var _this = this;
        this.pNodeInfoService = pNodeInfoService;
        this.nodeType = "forceGraph";
        this.nodeInfo = new __WEBPACK_IMPORTED_MODULE_2__shared_models_node_info__["a" /* NodeInfo */]();
        this.nodeInfo.name = 'network works!';
        this.subscription = this.pNodeInfoService.nodeInfoAnnounced.subscribe(function (nodeInfo) {
            _this.nodeInfo = nodeInfo;
        });
    }
    NetworkComponent.prototype.ngOnInit = function () {
    };
    NetworkComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NetworkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-network',
            template: __webpack_require__(640),
            styles: [__webpack_require__(630)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */]) === "function" && _a || Object])
    ], NetworkComponent);
    return NetworkComponent;
    var _a;
}());

//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_community_detection_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceDirectedGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForceDirectedGraphComponent = /** @class */ (function () {
    function ForceDirectedGraphComponent(graphDataService, communityDetectionService) {
        this.graphDataService = graphDataService;
        this.communityDetectionService = communityDetectionService;
        this.nodeDataForCommunityDetection = [];
        this.edgeDataForCommunityDetection = [];
        this.nodeDataForViz = {};
        this.edgeDataForViz = {};
        this.publicKeyToIndexKeyMap = {};
        this.egoNetworkActivated = false;
        this.linkedMatrix = {};
        this.maxDegree = 0;
        this.minDegree = 0;
        this.nodeSum = 0;
        this.edgeSum = 0;
        this.degreeSum = 0;
        this.averageDegree = 0;
        this.testDegreeArray = [];
    }
    ForceDirectedGraphComponent.prototype.ngOnInit = function () { };
    ForceDirectedGraphComponent.prototype.initializeData = function (dataInput) {
        var _this = this;
        if (!dataInput) {
            alert("no graph data input found.");
        }
        ;
        this.nodeDataForViz = dataInput.nodes;
        this.nodeSum = this.nodeDataForViz.length;
        this.nodeDataForViz.forEach(function (node, i) {
            _this.nodeDataForCommunityDetection.push(i);
            node["key"] = i;
            node["degree"] = 0;
            _this.publicKeyToIndexKeyMap[node.nodeid] = i;
        });
        this.edgeDataForViz = dataInput.channels;
        this.edgeSum = this.edgeDataForViz.length;
        var sourceNodeKey = "";
        var targetNodeKey = "";
        var sourceNodeExits;
        var targetNodeExits;
        // test the degree thredshold
        var degreeArray = [];
        this.edgeDataForViz.forEach(function (edge, i) {
            sourceNodeKey = edge.source;
            targetNodeKey = edge.destination;
            sourceNodeExits = _this.publicKeyToIndexKeyMap[sourceNodeKey];
            targetNodeExits = _this.publicKeyToIndexKeyMap[targetNodeKey];
            if (sourceNodeExits && targetNodeExits) {
                _this.edgeDataForCommunityDetection.push({
                    source: sourceNodeExits,
                    target: targetNodeExits,
                    weight: 1
                });
                // calculate the degree of related node
                var sourceDegree = (_this.nodeDataForViz[sourceNodeExits]["degree"] += 1);
                var targetDegree = (_this.nodeDataForViz[targetNodeExits]["degree"] += 1);
                if (sourceDegree > _this.maxDegree) {
                    _this.maxDegree = sourceDegree;
                }
                if (sourceDegree < _this.minDegree) {
                    _this.minDegree = sourceDegree;
                }
                if (targetDegree > _this.maxDegree) {
                    _this.maxDegree = targetDegree;
                }
                if (targetDegree < _this.minDegree) {
                    _this.minDegree = targetDegree;
                }
                // initialize the linkeMatrix
                _this.linkedMatrix[sourceNodeExits + ',' + targetNodeExits] = 1;
                _this.linkedMatrix[targetNodeExits + ',' + sourceNodeExits] = 1;
            }
            ;
        });
        this.nodeDataForViz.forEach(function (node) {
            _this.degreeSum += node.degree;
            // test the degree thredshold
            degreeArray.push(node.degree / 2);
        });
        this.degreeSum = this.degreeSum / 2;
        this.averageDegree = Math.round(this.degreeSum / this.nodeSum);
        // test the degree thredshold
        degreeArray.sort(function (n1, n2) { return (n2 - n1); });
        this.testDegreeArray = degreeArray;
        // console.log("the degree array:", degreeArray);
        // console.log("the degree sum:",this.degreeSum);
        // download the file
        // this.downloadTheArray(degreeArray);
    };
    ForceDirectedGraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.graphDataService.getGraphDataTest()
            .then(function (data) {
            _this.initializeData(data);
            _this.renderForceDirectedGraph();
            // test
            console.log(_this.testDegreeArray);
            var percent = 0.0;
            var sum = 0;
            var testIndex = 0;
            for (var i = 0; i < 603; i++) {
                sum += _this.testDegreeArray[i];
                percent = sum / (_this.degreeSum);
                if (percent >= 0.8) {
                    testIndex = i;
                    break;
                }
            }
            console.log(testIndex);
            // this.calculateTheCommunityPersentage();
        });
    };
    ;
    ForceDirectedGraphComponent.prototype.renderForceDirectedGraph = function () {
        var testMatrix = this.linkedMatrix;
        var maxD = this.maxDegree;
        var minD = this.minDegree;
        var degreeSize = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* scaleLinear */]().domain([minD, maxD]).range([3, 15]);
        var node_data = this.nodeDataForCommunityDetection;
        var edge_data = this.edgeDataForCommunityDetection;
        var community = this.communityDetectionService.run().nodes(node_data).edges(edge_data);
        // test
        var testComm = community();
        console.log("what we got here:", testComm);
        this.calculateTheCommunityPersentage(testComm);
        // layout parameter
        var width = 800;
        var height = 500;
        var original_node_data = this.nodeDataForViz;
        // use force simulation
        var simulation = __WEBPACK_IMPORTED_MODULE_3_d3__["b" /* forceSimulation */]()
            .force("link", __WEBPACK_IMPORTED_MODULE_3_d3__["c" /* forceLink */]())
            .force("charge", __WEBPACK_IMPORTED_MODULE_3_d3__["d" /* forceManyBody */]().strength(-150).distanceMax(500))
            .force("center", __WEBPACK_IMPORTED_MODULE_3_d3__["e" /* forceCenter */](width / 2, height / 2));
        var svg = __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */]("#forceGraph").append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["g" /* zoom */]().on('zoom', zoomed));
        var container = svg.append('g');
        simulation.force("collide", __WEBPACK_IMPORTED_MODULE_3_d3__["h" /* forceCollide */](function (d) { return degreeSize(d.degree); }));
        var link = container.selectAll(".link")
            .data(edge_data)
            .enter().append("line")
            .attr("class", "link")
            .style("stroke-width", function (d) { return 1; });
        var node = container.selectAll(".node")
            .data(original_node_data)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", function (d) {
            return degreeSize(d.degree);
            // return 5;
        })
            .style("fill", '#a30500')
            .on("click", showGraphNodeInfo);
        // .call(D3.drag()
        //   .on("start", dragstarted)
        //   .on("drag", dragged)
        //   .on("end", dragended));
        simulation.nodes(original_node_data)
            .on("tick", function () {
            link.attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node.attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; });
        });
        simulation.force("link", __WEBPACK_IMPORTED_MODULE_3_d3__["c" /* forceLink */](edge_data).distance(20).strength(1));
        __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */]('#forceGraphCDButton').on('click', function () {
            //Communnity detection on click event
            // let community_assignment_result = community();
            // test
            console.log("the parameter:", testComm);
            var community_assignment_result = testComm;
            var node_ids = Object.keys(community_assignment_result);
            console.log('Resulting Community Data', community_assignment_result);
            var max_community_number = 0;
            node_ids.forEach(function (d) {
                original_node_data[d].community = community_assignment_result[d];
                max_community_number = max_community_number < community_assignment_result[d] ? community_assignment_result[d] : max_community_number;
            });
            console.log(max_community_number);
            // let color = D3.scaleOrdinal(D3.schemeCategory20); //TODO color domain not specified
            // let color = D3.scaleLinear().domain([0,max_community_number]).range(D3.schemeCategory20);
            var color = __WEBPACK_IMPORTED_MODULE_3_d3__["i" /* scaleSequential */](__WEBPACK_IMPORTED_MODULE_3_d3__["j" /* interpolateRgbBasis */](__WEBPACK_IMPORTED_MODULE_3_d3__["k" /* schemeCategory20c */])).domain([0, max_community_number]);
            __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.node')
                .data(original_node_data)
                .style('fill', function (d) { return color(d.community); });
        });
        __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */]('#forceGraphResetButton').on('click', function () {
            __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.node')
                .data(original_node_data)
                .style('fill', '#a30500');
        });
        function zoomed() {
            container.attr("transform", "translate(" + __WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].transform.x + ", " + __WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].transform.y + ") scale(" + __WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].transform.k + ")");
        }
        function neighboring(a, b) {
            return testMatrix[a.index + ',' + b.index];
        }
        function showGraphNodeInfo(d) {
            __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */]("#graphNodeInfoAlias")
                .text('Node Alias: ' + d.alias);
            __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */]("#graphNodeInfoDegree")
                .text('Node Degree: ' + d.degree / 2);
            this.testString = d.alias;
            if (!this.egoNetworkActivated) {
                __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.link').style('stroke-opacity', function (l) {
                    return l.target == d || l.source == d ? 1 : 0.1;
                });
                __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.node').style('opacity', function (n) {
                    return neighboring(d, n) ? 1 : 0.1;
                });
                __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* select */](this).style('opacity', 1);
                this.egoNetworkActivated = 1;
            }
            else {
                // Restore nodes and links to normal opacity.
                __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.link').style('stroke-opacity', '0.6');
                __WEBPACK_IMPORTED_MODULE_3_d3__["l" /* selectAll */]('.node').style('opacity', '1');
                this.egoNetworkActivated = 0;
            }
        }
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_3_d3__["m" /* event */].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    ForceDirectedGraphComponent.prototype.downloadTheArray = function (data) {
        var fileContents = "";
        var filename = "hello.txt";
        var filetype = "text/plain";
        // intialize the content
        data.forEach(function (element, i) {
            fileContents += i + " " + element + "\n";
        });
        var a = document.createElement("a");
        var dataURI = "data:" + filetype +
            ";base64," + btoa(fileContents);
        a.href = dataURI;
        a['download'] = filename;
        var e = document.createEvent("MouseEvents");
        // Use of deprecated function to satisfy TypeScript.
        e.initMouseEvent("click", true, false, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
        a.remove();
    };
    ForceDirectedGraphComponent.prototype.calculateTheCommunityPersentage = function (communityData) {
        // let community = this.communityDetectionService.run().nodes(this.nodeDataForCommunityDetection).edges(this.edgeDataForCommunityDetection);
        // let community_assignment_result = community();
        console.log("what we got here:", communityData);
        var node_ids = Object.keys(communityData);
        var differentCommArrays = new Array(34);
        node_ids.forEach(function (i) {
            differentCommArrays[communityData[i]] = differentCommArrays[communityData[i]] ? differentCommArrays[communityData[i]] : new Array();
            differentCommArrays[communityData[i]].push(i);
        });
        console.log(differentCommArrays);
    };
    ForceDirectedGraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-force-directed-graph',
            template: __webpack_require__(642),
            styles: [__webpack_require__(632)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_graph_data_service__["a" /* GraphDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_community_detection_service__["a" /* CommunityDetectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_community_detection_service__["a" /* CommunityDetectionService */]) === "function" && _b || Object])
    ], ForceDirectedGraphComponent);
    return ForceDirectedGraphComponent;
    var _a, _b;
}());

//# sourceMappingURL=force-directed-graph.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tree_data_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_info__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TidyTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TidyTreeComponent = /** @class */ (function () {
    function TidyTreeComponent(treeDataService, pNodeInfoService) {
        this.treeDataService = treeDataService;
        this.pNodeInfoService = pNodeInfoService;
    }
    TidyTreeComponent.prototype.ngOnInit = function () { };
    // async testToGetTree() {
    //   await this.treeDataService.getTreeDataTest();
    // }
    TidyTreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // for local use without backend 
        this.treeDataService.getTreeDataTest()
            .then(function (data) {
            _this.show(0, data[0]);
        });
        // this.testToGetTree().then(
        //   data => {
        //     console.log(data);
        //     this.show(0, data[0]);
        //   }
        // )
    };
    TidyTreeComponent.prototype.show = function (treeIndex, dataTree) {
        // for the info update callback onClick
        var annnouceNodeInfoSource = this.pNodeInfoService.nodeInfoAnnouncedSource;
        // test d3 tree
        var treeData = dataTree;
        // ************** Generate the tree diagram  *****************
        var margin = { top: 20, right: 120, bottom: 20, left: 120 }, width = 960 - margin.right - margin.left, height = 500 - margin.top - margin.bottom;
        var i = 0, duration = 750, root;
        var tree = d3.layout.tree()
            .size([height, width]);
        var diagonal = d3.svg.diagonal()
            .projection(function (d) { return [d.y, d.x]; });
        var svg = d3.select("#treeViz")
            .append("div")
            .attr("id", "chart" + treeIndex)
            .append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        root = treeData;
        root.x0 = height / 2;
        root.y0 = 0;
        update(root);
        d3.select(self.frameElement).style("height", "500px");
        function update(source) {
            // Compute the new tree layout.
            var nodes = tree.nodes(root), links = tree.links(nodes);
            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * 180; });
            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function (d) { return d.id || (d.id = ++i); });
            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                .on("click", click);
            // to determine which color should be used for different situations of verification
            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
            nodeEnter.append("text")
                .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
                .attr("dy", ".35em")
                .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                .text(function (d) { return d.name; })
                .style("fill-opacity", 1e-6);
            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
            nodeUpdate.select("circle")
                .attr("r", 10)
                .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
            nodeUpdate.select("text")
                .style("fill-opacity", 1);
            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();
            nodeExit.select("circle")
                .attr("r", 1e-6);
            nodeExit.select("text")
                .style("fill-opacity", 1e-6);
            // Update the links…
            var link = svg.selectAll("path.link")
                .data(links, function (d) { return d.target.id; });
            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal({ source: o, target: o });
            });
            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);
            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal({ source: o, target: o });
            })
                .remove();
            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }
        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else {
                d.children = d._children;
                d._children = null;
            }
            var n = new __WEBPACK_IMPORTED_MODULE_3__models_node_info__["a" /* NodeInfo */]();
            n.name = d.name;
            annnouceNodeInfoSource.next(n);
            update(d);
        }
    };
    TidyTreeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-tidy-tree',
            template: __webpack_require__(643),
            styles: [__webpack_require__(633)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tree_data_service__["a" /* TreeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tree_data_service__["a" /* TreeDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__["a" /* PassNodeInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__["a" /* PassNodeInfoService */]) === "function" && _b || Object])
    ], TidyTreeComponent);
    return TidyTreeComponent;
    var _a, _b;
}());

//# sourceMappingURL=tidy-tree.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_node_info__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreemapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreemapComponent = /** @class */ (function () {
    function TreemapComponent(pNodeInfoService) {
        this.pNodeInfoService = pNodeInfoService;
        // initialize the data
        this.data = {
            "name": "angular.core",
            "children": [
                {
                    "name": "lifecycles",
                    "children": [
                        {
                            "name": "OnInit",
                            "value": 100
                        },
                        {
                            "name": "OnChange",
                            "value": 100
                        },
                        {
                            "name": "AfterContentInit",
                            "value": 300
                        },
                        {
                            "name": "AfterContentChecked",
                            "value": 200
                        },
                        {
                            "name": "AfterViewInit",
                            "value": 200
                        },
                        {
                            "name": "OnDestroy",
                            "value": 100
                        }
                    ]
                },
                {
                    "name": "Component",
                    "value": 500
                }
            ]
        };
    }
    TreemapComponent.prototype.ngOnInit = function () {
        this.treemapLayout = __WEBPACK_IMPORTED_MODULE_1_d3__["n" /* treemap */]()
            .tile(__WEBPACK_IMPORTED_MODULE_1_d3__["o" /* treemapBinary */]) // different strategies are available: treemapBinary/treemapSlice etc.
            .size([800, 500])
            .paddingOuter(16);
        this.rootNode = __WEBPACK_IMPORTED_MODULE_1_d3__["p" /* hierarchy */](this.data);
        this.rootNode.sum(function (d) { return 1; }); // change this d.value to 1 to make count valueable
        this.treemapLayout(this.rootNode);
    };
    TreemapComponent.prototype.ngAfterViewInit = function () {
        var annouceNodeInfoSource = this.pNodeInfoService.nodeInfoAnnouncedSource;
        var nodes = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* select */]('#treemap').select('svg g')
            .selectAll('g')
            .data(this.rootNode.descendants())
            .enter()
            .append('g')
            .attr('transform', function (d) { return 'translate(' + [d.x0, d.y0] + ')'; });
        nodes
            .append('rect')
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .on('click', showNodeInfo);
        nodes
            .append('text')
            .attr('dx', 4)
            .attr('dy', 14)
            .text(function (d) { return d.data.name; });
        function showNodeInfo(node) {
            var n = new __WEBPACK_IMPORTED_MODULE_3__models_node_info__["a" /* NodeInfo */]();
            n.name = node.data.name;
            annouceNodeInfoSource.next(n);
        }
    };
    TreemapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-treemap',
            template: __webpack_require__(644),
            styles: [__webpack_require__(634)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__["a" /* PassNodeInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pass_node_info_service__["a" /* PassNodeInfoService */]) === "function" && _a || Object])
    ], TreemapComponent);
    return TreemapComponent;
    var _a;
}());

//# sourceMappingURL=treemap.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityDetectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityDetectionService = /** @class */ (function () {
    function CommunityDetectionService() {
        this.run = function () {
            //Constants
            var __PASS_MAX = -1;
            var __MIN = 0.0000001;
            //Local lets
            var original_graph_nodes;
            var original_graph_edges;
            var original_graph = {};
            var partition_init;
            //Helpers
            function make_set(array) {
                var set = {};
                array.forEach(function (d, i) {
                    set[d] = true;
                });
                return Object.keys(set);
            }
            function obj_values(obj) {
                var vals = [];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        vals.push(obj[key]);
                    }
                }
                return vals;
            }
            function get_degree_for_node(graph, node) {
                var neighbours = graph._assoc_mat[node] ? Object.keys(graph._assoc_mat[node]) : [];
                var weight = 0;
                neighbours.forEach(function (neighbour, i) {
                    var value = graph._assoc_mat[node][neighbour] || 1;
                    if (node === neighbour) {
                        value *= 2;
                    }
                    weight += value;
                });
                return weight;
            }
            function get_neighbours_of_node(graph, node) {
                if (typeof graph._assoc_mat[node] === 'undefined') {
                    return [];
                }
                var neighbours = Object.keys(graph._assoc_mat[node]);
                return neighbours;
            }
            function get_edge_weight(graph, node1, node2) {
                return graph._assoc_mat[node1] ? graph._assoc_mat[node1][node2] : undefined;
            }
            function get_graph_size(graph) {
                var size = 0;
                graph.edges.forEach(function (edge) {
                    size += edge.weight;
                });
                return size;
            }
            function add_edge_to_graph(graph, edge) {
                update_assoc_mat(graph, edge);
                var edge_index = graph.edges.map(function (d) {
                    return d.source + '_' + d.target;
                }).indexOf(edge.source + '_' + edge.target);
                if (edge_index !== -1) {
                    graph.edges[edge_index].weight = edge.weight;
                }
                else {
                    graph.edges.push(edge);
                }
            }
            function make_assoc_mat(edge_list) {
                var mat = {};
                edge_list.forEach(function (edge, i) {
                    mat[edge.source] = mat[edge.source] || {};
                    mat[edge.source][edge.target] = edge.weight;
                    mat[edge.target] = mat[edge.target] || {};
                    mat[edge.target][edge.source] = edge.weight;
                });
                return mat;
            }
            function update_assoc_mat(graph, edge) {
                graph._assoc_mat[edge.source] = graph._assoc_mat[edge.source] || {};
                graph._assoc_mat[edge.source][edge.target] = edge.weight;
                graph._assoc_mat[edge.target] = graph._assoc_mat[edge.target] || {};
                graph._assoc_mat[edge.target][edge.source] = edge.weight;
            }
            function clone(obj) {
                if (obj === null || (typeof obj === 'undefined' ? 'undefined' : typeof (obj)) !== 'object')
                    return obj;
                var temp = obj.constructor();
                for (var key in obj) {
                    temp[key] = clone(obj[key]);
                }
                return temp;
            }
            //Core-Algorithm Related 
            function init_status(graph, status, part) {
                status['nodes_to_com'] = {};
                status['total_weight'] = 0;
                status['internals'] = {};
                status['degrees'] = {};
                status['gdegrees'] = {};
                status['loops'] = {};
                status['total_weight'] = get_graph_size(graph);
                if (typeof part === 'undefined') {
                    graph.nodes.forEach(function (node, i) {
                        status.nodes_to_com[node] = i;
                        var deg = get_degree_for_node(graph, node);
                        if (deg < 0)
                            throw 'Bad graph type, use positive weights!';
                        status.degrees[i] = deg;
                        status.gdegrees[node] = deg;
                        status.loops[node] = get_edge_weight(graph, node, node) || 0;
                        status.internals[i] = status.loops[node];
                    });
                }
                else {
                    graph.nodes.forEach(function (node, i) {
                        var com = part[node];
                        status.nodes_to_com[node] = com;
                        var deg = get_degree_for_node(graph, node);
                        status.degrees[com] = (status.degrees[com] || 0) + deg;
                        status.gdegrees[node] = deg;
                        var inc = 0.0;
                        var neighbours = get_neighbours_of_node(graph, node);
                        neighbours.forEach(function (neighbour, i) {
                            var weight = graph._assoc_mat[node][neighbour];
                            if (weight <= 0) {
                                throw "Bad graph type, use positive weights";
                            }
                            if (part[neighbour] === com) {
                                if (neighbour === node) {
                                    inc += weight;
                                }
                                else {
                                    inc += weight / 2.0;
                                }
                            }
                        });
                        status.internals[com] = (status.internals[com] || 0) + inc;
                    });
                }
            }
            function __modularity(status) {
                var links = status.total_weight;
                var result = 0.0;
                var communities = make_set(obj_values(status.nodes_to_com));
                communities.forEach(function (com, i) {
                    var in_degree = status.internals[com] || 0;
                    var degree = status.degrees[com] || 0;
                    if (links > 0) {
                        result = result + in_degree / links - Math.pow(degree / (2.0 * links), 2);
                    }
                });
                return result;
            }
            function __neighcom(node, graph, status) {
                // compute the communities in the neighb. of the node, with the graph given by
                // node_to_com
                var weights = {};
                var neighboorhood = get_neighbours_of_node(graph, node); //make iterable;
                neighboorhood.forEach(function (neighbour, i) {
                    if (neighbour !== node) {
                        var weight = graph._assoc_mat[node][neighbour] || 1;
                        var neighbourcom = status.nodes_to_com[neighbour];
                        weights[neighbourcom] = (weights[neighbourcom] || 0) + weight;
                    }
                });
                return weights;
            }
            function __insert(node, com, weight, status) {
                //insert node into com and modify status
                status.nodes_to_com[node] = +com;
                status.degrees[com] = (status.degrees[com] || 0) + (status.gdegrees[node] || 0);
                status.internals[com] = (status.internals[com] || 0) + weight + (status.loops[node] || 0);
            }
            function __remove(node, com, weight, status) {
                //remove node from com and modify status
                status.degrees[com] = (status.degrees[com] || 0) - (status.gdegrees[node] || 0);
                status.internals[com] = (status.internals[com] || 0) - weight - (status.loops[node] || 0);
                status.nodes_to_com[node] = -1;
            }
            function __renumber(dict) {
                var count = 0;
                var ret = clone(dict); //deep copy :) 
                var new_values = {};
                var dict_keys = Object.keys(dict);
                dict_keys.forEach(function (key) {
                    var value = dict[key];
                    var new_value = typeof new_values[value] === 'undefined' ? -1 : new_values[value];
                    if (new_value === -1) {
                        new_values[value] = count;
                        new_value = count;
                        count = count + 1;
                    }
                    ret[key] = new_value;
                });
                return ret;
            }
            function __one_level(graph, status) {
                //Compute one level of the Communities Dendogram.
                var modif = true;
                var nb_pass_done = 0;
                var cur_mod = __modularity(status);
                var new_mod = cur_mod;
                while (modif && nb_pass_done !== __PASS_MAX) {
                    cur_mod = new_mod;
                    modif = false;
                    nb_pass_done += 1;
                    graph.nodes.forEach(function (node, i) {
                        var com_node = status.nodes_to_com[node];
                        var degc_totw = (status.gdegrees[node] || 0) / (status.total_weight * 2.0);
                        var neigh_communities = __neighcom(node, graph, status);
                        __remove(node, com_node, neigh_communities[com_node] || 0.0, status);
                        var best_com = com_node;
                        var best_increase = 0;
                        var neigh_communities_entries = Object.keys(neigh_communities); //make iterable;
                        neigh_communities_entries.forEach(function (com, i) {
                            var incr = neigh_communities[com] - (status.degrees[com] || 0.0) * degc_totw;
                            if (incr > best_increase) {
                                best_increase = incr;
                                best_com = com;
                            }
                        });
                        __insert(node, best_com, neigh_communities[best_com] || 0, status);
                        if (best_com !== com_node) {
                            modif = true;
                        }
                    });
                    new_mod = __modularity(status);
                    if (new_mod - cur_mod < __MIN) {
                        break;
                    }
                }
            }
            function induced_graph(partition, graph) {
                var ret = { nodes: [], edges: [], _assoc_mat: {} };
                var w_prec, weight;
                //add nodes from partition values
                var partition_values = obj_values(partition);
                ret.nodes = ret.nodes.concat(make_set(partition_values)); //make set
                graph.edges.forEach(function (edge, i) {
                    weight = edge.weight || 1;
                    var com1 = partition[edge.source];
                    var com2 = partition[edge.target];
                    w_prec = get_edge_weight(ret, com1, com2) || 0;
                    var new_weight = w_prec + weight;
                    add_edge_to_graph(ret, { 'source': com1, 'target': com2, 'weight': new_weight });
                });
                return ret;
            }
            function partition_at_level(dendogram, level) {
                var partition = clone(dendogram[0]);
                var _loop_1 = function (i) {
                    Object.keys(partition).forEach(function (key, j) {
                        var node = key;
                        var com = partition[key];
                        partition[node] = dendogram[i][com];
                    });
                };
                for (var i = 1; i < level + 1; i++) {
                    _loop_1(i);
                }
                return partition;
            }
            function generate_dendogram(graph, part_init) {
                if (graph.edges.length === 0) {
                    var part_1 = {};
                    graph.nodes.forEach(function (node, i) {
                        part_1[node] = node;
                    });
                    return part_1;
                }
                var status = {};
                init_status(original_graph, status, part_init);
                var mod = __modularity(status);
                var status_list = [];
                __one_level(original_graph, status);
                var new_mod = __modularity(status);
                var partition = __renumber(status.nodes_to_com);
                status_list.push(partition);
                mod = new_mod;
                var current_graph = induced_graph(partition, original_graph);
                init_status(current_graph, status, part_init);
                while (true) {
                    __one_level(current_graph, status);
                    new_mod = __modularity(status);
                    if (new_mod - mod < __MIN) {
                        break;
                    }
                    partition = __renumber(status.nodes_to_com);
                    status_list.push(partition);
                    mod = new_mod;
                    current_graph = induced_graph(partition, current_graph);
                    init_status(current_graph, status, part_init);
                }
                return status_list;
            }
            var core = function core() {
                var status = {};
                var dendogram = generate_dendogram(original_graph, partition_init);
                return partition_at_level(dendogram, dendogram.length - 1);
            };
            core.nodes = function (nds) {
                if (arguments.length > 0) {
                    original_graph_nodes = nds;
                }
                return core;
            };
            core.edges = function (edgs) {
                if (typeof original_graph_nodes === 'undefined')
                    throw 'Please provide the graph nodes first!';
                if (arguments.length > 0) {
                    original_graph_edges = edgs;
                    var assoc_mat = make_assoc_mat(edgs);
                    original_graph = {
                        'nodes': original_graph_nodes,
                        'edges': original_graph_edges,
                        '_assoc_mat': assoc_mat
                    };
                }
                return core;
            };
            core.partition_init = function (prttn) {
                if (arguments.length > 0) {
                    partition_init = prttn;
                }
                return core;
            };
            return core;
        };
    }
    CommunityDetectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommunityDetectionService);
    return CommunityDetectionService;
}());

//# sourceMappingURL=community-detection.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphDataService = /** @class */ (function () {
    function GraphDataService(http) {
        this.http = http;
        // for local usage without backend api
        this.localGraphDataUrl = 'assets/channels.json';
    }
    // local test method, do not need any backend api
    GraphDataService.prototype.getGraphDataTest = function () {
        return this.http.get(this.localGraphDataUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GraphDataService.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    GraphDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GraphDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], GraphDataService);
    return GraphDataService;
    var _a;
}());

//# sourceMappingURL=graph-data.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeDataService = /** @class */ (function () {
    function TreeDataService(http) {
        this.http = http;
        // for local usage without backend api
        this.localTreeDataUrl = 'assets/treeData.json';
    }
    // local test method, do not need any backend api
    TreeDataService.prototype.getTreeDataTest = function () {
        return this.http.get(this.localTreeDataUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TreeDataService.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    TreeDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TreeDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TreeDataService);
    return TreeDataService;
    var _a;
}());

//# sourceMappingURL=tree-data.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_node_info__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_pass_node_info_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeComponent = /** @class */ (function () {
    function TreeComponent(pNodeInfo) {
        var _this = this;
        this.pNodeInfo = pNodeInfo;
        // initialize the nodeInfo for info panel
        this.nodeInfo = new __WEBPACK_IMPORTED_MODULE_1__shared_models_node_info__["a" /* NodeInfo */]();
        this.nodeInfo.name = " ";
        this.nodeType = 'tidyTree';
        this.subscription = this.pNodeInfo.nodeInfoAnnounced.subscribe(function (nodeInfo) {
            _this.nodeInfo = nodeInfo;
        });
    }
    TreeComponent.prototype.ngOnInit = function () { };
    TreeComponent.prototype.ngAfterViewInit = function () { };
    TreeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TreeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__(645),
            styles: [__webpack_require__(635)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */]) === "function" && _a || Object])
    ], TreeComponent);
    return TreeComponent;
    var _a;
}());

//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 270;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(283);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_visual_tidy_tree_tidy_tree_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_visual_treemap_treemap_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_visual_force_directed_graph_force_directed_graph_component__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    {
        path: 'tree',
        component: __WEBPACK_IMPORTED_MODULE_3__tree_tree_component__["a" /* TreeComponent */],
        children: [
            {
                path: 'treemap',
                component: __WEBPACK_IMPORTED_MODULE_6__shared_components_visual_treemap_treemap_component__["a" /* TreemapComponent */]
            },
            {
                // as default page, first to lauch the tidy tree
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__shared_components_visual_tidy_tree_tidy_tree_component__["a" /* TidyTreeComponent */]
            }
        ]
    },
    {
        path: 'network',
        component: __WEBPACK_IMPORTED_MODULE_4__network_network_component__["a" /* NetworkComponent */],
        children: [
            {
                // force directed graph as default visual interpretation
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_7__shared_components_visual_force_directed_graph_force_directed_graph_component__["a" /* ForceDirectedGraphComponent */]
            }
        ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    ;
    AppComponent.prototype.ngOnInit = function () { };
    ;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(638),
            styles: [__webpack_require__(628)]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_tree_data_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tree_tree_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__network_network_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_info_panel_info_panel_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_components_visual_tidy_tree_tidy_tree_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_components_visual_treemap_treemap_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_components_visual_force_directed_graph_force_directed_graph_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_pass_node_info_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_graph_data_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_community_detection_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__network_network_component__["a" /* NetworkComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_components_info_panel_info_panel_component__["a" /* InfoPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_components_visual_tidy_tree_tidy_tree_component__["a" /* TidyTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_components_visual_treemap_treemap_component__["a" /* TreemapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_components_visual_force_directed_graph_force_directed_graph_component__["a" /* ForceDirectedGraphComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_services_tree_data_service__["a" /* TreeDataService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_pass_node_info_service__["a" /* PassNodeInfoService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_graph_data_service__["a" /* GraphDataService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_community_detection_service__["a" /* CommunityDetectionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_node_info__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPanelComponent = /** @class */ (function () {
    function InfoPanelComponent() {
        this.isTidyTreeLayout = true;
        this.isTreemapLayout = false;
        this.isForceGraphLayout = false;
    }
    InfoPanelComponent.prototype.ngOnInit = function () {
    };
    InfoPanelComponent.prototype.ngAfterContentInit = function () {
        if (this.nodeType == 'tidyTree') {
            this.isTidyTreeLayout = true;
            this.isForceGraphLayout = false;
            this.isTreemapLayout = false;
        }
        else if (this.nodeType == 'treemap') {
            this.isTidyTreeLayout = false;
            this.isForceGraphLayout = false;
            this.isTreemapLayout = true;
        }
        else if (this.nodeType == 'forceGraph') {
            this.isTidyTreeLayout = false;
            this.isForceGraphLayout = true;
            this.isTreemapLayout = false;
        }
        else {
            console.error('nodeType is corrupt.');
        }
    };
    InfoPanelComponent.prototype.showTidyTree = function () {
        this.isTidyTreeLayout = true;
        this.isForceGraphLayout = false;
        this.isTreemapLayout = false;
    };
    InfoPanelComponent.prototype.showTreemap = function () {
        this.isTidyTreeLayout = false;
        this.isForceGraphLayout = false;
        this.isTreemapLayout = true;
    };
    InfoPanelComponent.prototype.showForceGraph = function () {
        this.isTidyTreeLayout = false;
        this.isForceGraphLayout = true;
        this.isTreemapLayout = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_node_info__["a" /* NodeInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_node_info__["a" /* NodeInfo */]) === "function" && _a || Object)
    ], InfoPanelComponent.prototype, "nodeInfo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], InfoPanelComponent.prototype, "nodeType", void 0);
    InfoPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
            selector: 'app-info-panel',
            template: __webpack_require__(641),
            styles: [__webpack_require__(631)]
        }),
        __metadata("design:paramtypes", [])
    ], InfoPanelComponent);
    return InfoPanelComponent;
    var _a;
}());

//# sourceMappingURL=info-panel.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeInfo; });
var NodeInfo = /** @class */ (function () {
    function NodeInfo() {
    }
    return NodeInfo;
}());

//# sourceMappingURL=node-info.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassNodeInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassNodeInfoService = /** @class */ (function () {
    function PassNodeInfoService() {
        // Observable sources
        this.nodeInfoAnnouncedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable streams
        this.nodeInfoAnnounced = this.nodeInfoAnnouncedSource.asObservable();
    }
    // Service commands
    PassNodeInfoService.prototype.announceNodeInfo = function (nodeInfo) {
        this.nodeInfoAnnouncedSource.next(nodeInfo);
    };
    PassNodeInfoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PassNodeInfoService);
    return PassNodeInfoService;
}());

//# sourceMappingURL=pass-node-info.service.js.map

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.node {\n  cursor: pointer;\n}\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.node text {\n  font: 12px sans-serif;\n}\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Viz-toolkit</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\">Dashboard<span class=\"sr-only\">(current)</span></a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/tree\" routerLinkActive=\"active\">Tree<span class=\"sr-only\">(current)</span></a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/network\" routerLinkActive=\"active\">Network<span class=\"sr-only\">(current)</span></a></li>\n        </ul>\n        <!--<form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>-->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a href=\"#\">Logout</a></li> --> \n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div class=\"containerMx\">\n      <form class=\"form\">\n\t\t <div class=\"form-group\">\n\t        <button class=\"btn btn-lg btn-primary btn-block\" routerLink=\"/tree\" role=\"button\">\n\t\t\t\tDemo\n\t        </button>\t\n\t\t\t<a href=\"/\" class=\"btn btn-lg btn-success btn-block\" role=\"button\">\n\t\t\t\tUpload own dataset\n\t\t\t</a>\n\t\t </div>\n      </form>\n\n</div>\n"

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Node Info</h3>\n  </div>\n  <div class=\"panel-body\">\n    <p>Node Name: {{nodeInfo.name}}</p>\n    <a  routerLink=\"/tree/treemap\" \n        routerLinkActive=\"active\" \n        class=\"btn btn-md btn-success btn-block\" \n        role=\"button\"\n        *ngIf=\"isTidyTreeLayout\"\n        (click)=\"showTreemap()\"\n    >\n      Treemap\n    </a>\n    <button class=\"btn btn-md btn-primary btn-block\" \n      routerLink=\"/tree\" \n      role=\"button\"\n      *ngIf=\"isTreemapLayout\"\n      (click)=\"showTidyTree()\"\n    >\n      Tidy Tree\n    </button>\t\n    <button id=\"forceGraphResetButton\"\n      class=\"btn btn-md btn-primary btn-block\" \n      role=\"button\"\n      *ngIf=\"isForceGraphLayout\"\n    >\n      Reset\n    </button>\t\n    <button id=\"forceGraphCDButton\"\n      class=\"btn btn-md btn-success btn-block\" \n      role=\"button\"\n      *ngIf=\"isForceGraphLayout\"\n    >\n      Run Community Detection\n    </button>\t\n  </div>\n</div>\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-9\">\n    <div id=\"content_wrapper\">\n      <div id=\"forceGraph\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Node Info</h3>\n      </div>\n      <div class=\"panel-body\">\n        <p id=\"graphNodeInfoAlias\">Node Alias</p>\n        <p id=\"graphNodeInfoDegree\">Node Degree</p>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Network Info</h3>\n      </div>\n      <div class=\"panel-body\">\n        <p>Nodes number: {{nodeSum}}</p>\n        <p>Edges number: {{edgeSum}}</p>\n        <p>Ave. Degree: {{averageDegree}}</p>\n        <button id=\"forceGraphResetButton\"\n        class=\"btn btn-md btn-primary btn-block\" \n        role=\"button\"\n        >\n          Reset\n        </button>\t\n        <button id=\"forceGraphCDButton\"\n          class=\"btn btn-md btn-success btn-block\" \n          role=\"button\"\n        >\n          Run Community Detection\n        </button>\t\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div id=\"treeViz\">\n</div>\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "<div id=\"treemap\">\n    <svg width=\"960\" height=\"500\">\n        <g></g>\n    </svg>\n</div>"

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-9\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t<div class=\"col-md-3\">\n\t\t<app-info-panel \n\t\t\t[nodeInfo]=\"nodeInfo\"\n\t\t\t[nodeType]=\"nodeType\"\n\t\t>\n\t\t</app-info-panel>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(271);


/***/ })

},[698]);
//# sourceMappingURL=main.bundle.js.map