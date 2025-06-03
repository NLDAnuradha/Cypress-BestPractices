describe('Handles tables',(()=>{

    beforeEach('Login', ()=>{
        cy.visit("https://demo3x.opencartreports.com/admin/");
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo');
        cy.get("button[type='submit']").click();

        //cy.get('.btn-close').click();
        //navigate to the customers page
        cy.get('#menu-customer>a').click(); //customer main menu
        cy.get('#menu-customer>ul>li:first-child').click(); //customer sub/child item select

    })

    it('Check number of rows and columns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '7');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '10'); 
       

    })

    it('Check cell data from specific row and column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("test2@test.com");
    })

    it('Read all the rows and columns data in the first page', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr") //capture all the rows
        .each(($row, index, $rows) =>{  //first we have to capture all the rows

            cy.wrap($row).within(()=>{ // for every row

                cy.get("td").each(($col, index, $cols)=>{ // we are capturing all the columns
                    cy.log($col.text());

                })// this inner block repeat all the columns
            })
        }) //this outer each block will repeat each & every row for every row again
    })

    it('Pagination', ()=>{
        cy.get('#menu-system>a').click(); //System main menu
        cy.get('#menu-system>ul>li:first-child').click(); //System sub/child item select
        cy.get('#menu-system>ul>li:first-child>ul>li:nth-child(8)').click(); //Localization sub/child item select

        //find total no of pages
        cy.get(".col-sm-6.text-right").then((e)=>{
            let totalPages;
            let myText = e.text(); //capture whole text - Showing 1 to 20 of 4108 (206 Pages)
            totalPages = myText.substring( myText.indexOf("(")+1, myText.indexOf("Pages")-1 ); // capture exact value of page count
            cy.log("Total no mber of ages in the table ======>" +totalPages);
        })

        //read few pages - get the data from the table
        let TotalPages = 5;
        for(let p=1; p<=TotalPages; p++){
            if(TotalPages>1){
                cy.log("Active Page is = " +p);
                //cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.get("ul[class='pagination']>li:contains("+p+")").click({force: true});
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr") //capture all the rows
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); // capture zone Names
                        })
                    })
                })
        

            }
        }

    })

}))