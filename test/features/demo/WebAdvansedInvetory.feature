Feature: Advansed Web Interaction inventory

    @WebAdvansed 
    Scenario Outline: Demo Advansed Web interaction inventory

        Given login to inventory web page
        #Then Inventory page should list <NumberOfProducts>
        #Then Validate all products have valid price
    

        Examples:
            | TestId    | NumberOfProducts |
            | INT_TC001 | 6                |