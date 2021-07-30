describe("filter", function () {
    it("Banned word remover using filter",
        function () {
            assert.equal("This is banned word".filter('banned'), "This is word");
        });
});

describe("bubbleSort", function () {
    it("Returns the bubble sorted array",
        function () {
            assert.equal([-2, 45, 0, 11, -9].bubbleSort().toString(),  [-9, -2, 0, 11, 45].toString());
        });
});

describe("teach", function () {
    it("Returns the teacher name and her teaching course name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Undral", 25);
            assert.equal(teacher.teach("WAP"),  `${teacher.name} is now teaching WAP`);
        });
});
