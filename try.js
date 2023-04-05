const circle = {
    radius: 1,
    location: {
        a: 2,
        b: 3
    },
    talk: function() {
        console.log(this.radius)
    }
}
circle.talk()