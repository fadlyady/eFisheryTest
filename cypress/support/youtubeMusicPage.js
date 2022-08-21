class ytMusicPage{
    getBtnSignIn(){
        return cy.get('.sign-in-link');
    }
    getFieldUsername(){
        return cy.get("#identifierId");
    }
    getFieldPassword(){
        return cy.get("[name='password']");
    }
    getBtnNext(){
        return cy.xpath("//button[@class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']/div[@class='VfPpkd-RLmnJb']");
    }

    // Search
    getMenuSearch(){
        return cy.get("#placeholder");
    }
    getFieldInputSearch(){
        return cy.get('input#input');
    }
    getTopResult(){
        return cy.xpath("(//div[@id='contents'])[4]");
    }
    getDataSong1(){
        return cy.xpath("//ytmusic-shelf-renderer[2]//ytmusic-responsive-list-item-renderer[1]");
    }
    getInfoNoData(){
        return cy.xpath("//ytmusic-message-renderer[@class='style-scope ytmusic-item-section-renderer']");
    }
    
    // Dashboard
    getPlayQuickPick1(){
        // return cy.xpath("//ytmusic-responsive-list-item-renderer[1]//ytmusic-play-button-renderer[@id='play-button']");
        return cy.xpath("(//ytmusic-responsive-list-item-renderer[1]//ytmusic-play-button-renderer[@id='play-button'])[1]");
    }

    // Player
    getIconPlayPause(){
        return cy.get("#play-pause-button");
    }
    getIconNextSong(){
        return cy.get(".next-button");
    }
    getIconPreviousSong(){
        return cy.get(".previous-button");
    }
    getTitleSongList1(){
        return cy.xpath("(//div[@id='contents']//ytmusic-player-queue-item//div[@class='song-info style-scope ytmusic-player-queue-item']//yt-formatted-string)[1]");
    }
    getTitleSongList2(){
        return cy.xpath("(//div[@id='contents']//ytmusic-player-queue-item//div[@class='song-info style-scope ytmusic-player-queue-item']//yt-formatted-string)[3]");
    }
    getTitleFormPlayerBar(){
        return cy.xpath("//yt-formatted-string[@class='title style-scope ytmusic-player-bar']");
    }
}
export default ytMusicPage