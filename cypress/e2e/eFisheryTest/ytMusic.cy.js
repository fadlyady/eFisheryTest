/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import ytMusicPage from "../../support/youtubeMusicPage";

describe('Search Data by Keywords',() => {
    it('Search artist with keyword',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getMenuSearch().click();
        page.getFieldInputSearch().type('muse{enter}');
        cy.wait(1000);
        page.getTopResult().should('contain.text','Muse');
    });

    it('Search song with keyword',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getMenuSearch().click();
        page.getFieldInputSearch().type('hysteria{enter}');
        cy.wait(1000);
        page.getDataSong1().should('contain.text','Hysteria');
    });

    it('Search song with not valid keyword',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getMenuSearch().click();
        page.getFieldInputSearch().type('asdf9999{enter}');
        cy.wait(1000);
        page.getInfoNoData().should('contain.text','Tidak ditemukan hasil');
    });
});

describe('Quick Picks Song',() => {
    it('Play song from quick picks',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getPlayQuickPick1().click();
        page.getIconPlayPause().should('have.attr','title','Jeda');
    });

    it('Pause song from quick picks',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getPlayQuickPick1().click();
        cy.wait(5000);
        page.getIconPlayPause().click();
        page.getIconPlayPause().should('have.attr','title','Putar');
    });

    it('Next song from quick picks',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getPlayQuickPick1().click();
        cy.wait(5000);
        page.getTitleSongList2().invoke('text').as('title2');
        cy.then(function() {
            page.getIconNextSong().click();
            // cy.wait(1000);
            page.getTitleFormPlayerBar().should('contain.text',this.title2);
        });
    });

    it('Previous song from quick picks',() => {
        const page = new ytMusicPage();
        cy.visit('/');
        cy.wait(1000);
        page.getPlayQuickPick1().click();
        cy.wait(5000);
        page.getTitleSongList1().invoke('text').as('title1');
        cy.then(function() {
            page.getIconNextSong().click();
            page.getIconPreviousSong().click();
            // cy.wait(1000);
            page.getTitleFormPlayerBar().should('contain.text',this.title1);
        });
    });
});