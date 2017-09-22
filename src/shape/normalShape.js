/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-09-22 14:23:52 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-09-22 22:10:45
 * 普通形状
 * 
 */

var cOption = {
    fillStyle: "red",
    strokeStyle: "red",
    x: 10,
    y: 10,
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI * 2,
    counterclockwise: false
}
var rOption = {
    x: 10,
    y: 10,
    w: 10,
    h: 10,
    fillStyle: "red",
    strokeStyle: "red",
}



var util = require('../util/utils.js').util;

/**
 * 
 * 圆圈
 * @param {any} option  配置项
 * 
 */
function Circle(option) {
    var _temOption = util.extend(option, cOption);
    console.log(_temOption);
    this.x = _temOption.x;
    this.y = _temOption.y;
    this.radius = _temOption.radius;
    this.startAngle = _temOption.startAngle;
    this.endAngle = _temOption.endAngle;
    this.counterclockwise = _temOption.counterclockwise;
    this.fillStyle = _temOption.fillStyle;
    this.strokeStyle = _temOption.strokeStyle;
}

Circle.prototype = {
    stroke: function (context) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
        context.closePath();
        context.setStrokeStyle(this.strokeStyle)
        context.stroke();

        context.restore();
    },
    fill: function (context) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
        context.closePath();
        context.setStrokeStyle(this.fillStyle);
        context.fill();
        context.restore();
    },
    move: function (x, y) {
        this.x = x;
        this.y = y;
    }
}



/**
 * 方块
 */


function Rect(option) {
    var _temOption = util.extend(option, rOption);
    console.log(_temOption);
    this.x = _temOption.x;
    this.y = _temOption.centerY;
    this.radius = _temOption.radius;
    this.startAngle = _temOption.startAngle;
    this.endAngle = _temOption.endAngle;
    this.counterclockwise = _temOption.counterclockwise;
    this.fillStyle = _temOption.fillStyle;
    this.strokeStyle = _temOption.strokeStyle;
}

Rect.prototype = {
    stroke: function (context) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
        context.closePath();
        context.setStrokeStyle(this.strokeStyle)
        context.stroke();

        context.restore();
    },
    fill: function (context) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterclockwise);
        context.closePath();
        context.setStrokeStyle(this.fillStyle);
        context.fill();
        context.restore();
    },
    move: function (x, y) {
        this.x = x;
        this.y = y;
    }
}









module.exports = {
    Circle: Circle
}