// describe('page 1 login page tests ', () => {

//     it('display the Logo', () => {

//      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//      cy.get('img[src="/web/images/ohrm_branding.png?v=1721393199309"]')

//     });

//     it('Login credentials', () => {

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy.get('input[name="username"]').type('Admin');

//         cy.get('input[name="password"]').type('admin123');

//         cy.get('button[type="submit"]').click();
        
//     });
// });

// describe('page 2 tests', () => {

//     it('locate name', () => {

//         it(' dashboard after login', () => {

//             cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//             cy.get('input[name="username"]').type('Admin');
    
//             cy.get('input[name="password"]').type('admin123');
    
//             cy.get('button[type="submit"]').click();

//             cy.get('h6').should('contain', 'Dashboard'); 
//         });

       
//     });

//     it('Personal Details and verify the text', () => {

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         cy.get('input[name="username"]').type('Admin');

//         cy.get('input[name="password"]').type('admin123');

//         cy.get('button[type="submit"]').click();

//         cy.url().should('include', '/dashboard/index');

//         cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();

//         cy.get('.oxd-text').should('contain', 'Personal Details');


//     });
// });

describe('Page 1 Login Page Tests', () => {
    beforeEach(() => {
      
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
  
    it('display the logo', () => {
      cy.get('img[src="/web/images/ohrm_branding.png?v=1721393199309"]').should('be.visible');
    });
  
    it('login credentials', () => {
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', '/dashboard/index');
    });
  });
  
  describe('Page 2 Tests', () => {
    beforeEach(() => {
      
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
    });
  
    it('dashboard after login', () => {
      cy.url().should('include', '/dashboard/index');
      cy.get('h6').should('contain', 'Dashboard');
    });
  
    it('Personal Details and verify the text', () => {
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
      cy.get('.oxd-text').should('contain', 'Personal Details');
    });
  });
  