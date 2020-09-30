var drawTable = function(employees) {
    var rows = d3.select("#employees tbody")
                .selectAll("tr")
                .data(employees)
                .enter()
                .append("tr")

    rows.append("td")
        .text(function(employee){
            return employee.Name
    })
    rows.append("td")
        .text(function(employee){
            return employee.Title
    })
    rows.append("td")
        .text(function(employee){
            return employee.Email
    })
}


/*

d3.select("body")
.append("div")
.selectAll("tbody.employees")
.data(employees)
.enter()
.append("table")
.classed("employees", true)
.text(function(employee)
     {
    return employee
})


*/


var employeePromise = d3.csv("employee.csv")

var succFCN = function (employees) {
    console.log("employees", employees)
    drawTable(employees)
}

var failFCN = function (err) {
    console.error("did not find the file")
}


employeePromise.then(succFCN, failFCN);