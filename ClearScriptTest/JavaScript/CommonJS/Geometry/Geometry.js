// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

let Arithmetic = require("../Arithmetic/Arithmetic");
let Self = require("Geometry");

// ReSharper disable once PossiblyUnassignedProperty
exports.Meta = module.getContext();

exports.Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get Area() {
        return Self.Rectangle.CalculateArea(this.width, this.height);
    }
    static CalculateArea(width, height) {
        return Arithmetic.Multiply(width, height);
    }
}

exports.Square = class extends exports.Rectangle {
    constructor(side) {
        super(side, side);
    }
};
