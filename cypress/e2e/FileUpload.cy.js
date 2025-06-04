import 'cypress-file-upload';

describe('File Upload', (()=>{

    it.skip('Single File Upload', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html'); //visit the website
        cy.get('#fileinput').attachFile('Test1.pdf'); // upload the file
        cy.get('input[type="submit"][value="Upload"]').click();
        cy.wait(3000);

        //verify the upload succes message
        cy.get('#uploadedfilename').should('contain', 'Test1.pdf');
        cy.get('p').should('contain', 'You uploaded');
        
    })

    it.skip('File Upload - Rename', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html'); //visit the website
        cy.get('#fileinput').attachFile({filePath:'Test1.pdf',fileName:'myFile.pdf'}); // upload the file
        cy.get('input[type="submit"][value="Upload"]').click();
        cy.wait(3000);

        //verify the upload succes message
        cy.get('#uploadedfilename').should('contain', 'myFile.pdf');
        cy.get('p').should('contain', 'You uploaded');
    })

    it.only('File Upload - Drag and Drop', ()=>{
        cy.visit('https://www.dragdrop.com/test/'); //visit the website
        cy.get('#demo-upload').attachFile('Test1.pdf', {subjectType:'drag-n-drop'});
        //cy.get('#file-submit').click();
        cy.wait(3000);
        //verify the upload succes message
        cy.get('.dz-filename > span').should('contain', 'Test1.pdf');
        
    })

    it('Multiple File Upload', ()=>{
        
    })

    it('File Upload - Shadow Dom', ()=>{
        
    })
}))