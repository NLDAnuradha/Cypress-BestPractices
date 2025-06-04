import 'cypress-file-upload';

describe('File Upload', (()=>{

    it('Single File Upload', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html'); //visit the website
        cy.get('#fileinput').attachFile('Test1.pdf'); // upload the file
        cy.get('input[type="submit"][value="Upload"]').click();
        cy.wait(3000);

        //verify the upload succes message
        cy.get('#uploadedfilename').should('contain', 'Test1.pdf');
        cy.get('p').should('contain', 'You uploaded');
        
    })

    it('File Upload - Rename', ()=>{
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html'); //visit the website
        cy.get('#fileinput').attachFile({filePath:'Test1.pdf',fileName:'myFile.pdf'}); // upload the file
        cy.get('input[type="submit"][value="Upload"]').click();
        cy.wait(3000);

        //verify the upload succes message
        cy.get('#uploadedfilename').should('contain', 'myFile.pdf');
        cy.get('p').should('contain', 'You uploaded');
    })

    it('File Upload - Drag and Drop', ()=>{
        cy.visit('https://www.dragdrop.com/test/'); //visit the website
        cy.get('#demo-upload').attachFile('Test1.pdf', {subjectType:'drag-n-drop'});
        
        cy.wait(3000);

        //verify the upload succes message
        cy.get('.dz-filename > span').should('contain', 'Test1.pdf');
        
    })

    it('Multiple File Upload', ()=>{ 
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php'); //visit the website
        cy.get('#filesToUpload').attachFile(['Test1.pdf', 'Test2.pdf']); // upload the file
        
        cy.wait(3000);
        
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:');
    })

    it.only('File Upload - Shadow Dom', ()=>{
         cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
         cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('Test1.pdf');
         cy.wait(3000);
         cy.get(".smart-item-name", {includeShadowDom:true}).contains("Test1.pdf");  
    })
}))