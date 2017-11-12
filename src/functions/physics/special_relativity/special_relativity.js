let _ = vals => console.log(vals);
let special_relativity = (mass, velToLightSpeed) =>
    mass != 0
        ? velToLightSpeed < 1
            ? mass / Math.sqrt(1 - Math.pow(velToLightSpeed, 2.0))
            : _('You cannot travel faster than light!') || 0
        : _('You cannot weigh 0 units') || 0;
export { special_relativity };
