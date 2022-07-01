Feature: Advansed Web Interaction

    @WebAdvansed
    Scenario Outline: Demo Advansed Web interaction

        Given login to inventory web page
        Then Inventory page should list <NumberOfProducts>
       # Then Validate all products have valid price


        Examples:
            | TestId    | NumberOfProducts |
            | INT_TC001 | 6                |