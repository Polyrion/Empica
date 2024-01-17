window.dataService = (function() {
    'use strict';

    var service = {
        getTasks: getTasks,
        getCompanies: getCompanies,
        getTranslations: getTranslations
    };
    var mock = ["<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">John B. Briggs</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 15 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Ronny Rios</TxtCivilName><NumCompanyId type=\"System.Int32\">4</NumCompanyId><NumDaysRequested type=\"System.Int32\">1</NumDaysRequested><TxtDateRange type=\"System.String\">Tuesday 14 January 2020</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Reed L. Ferguson</TxtCivilName><NumCompanyId type=\"System.Int32\">3</NumCompanyId><NumDaysRequested type=\"System.Int32\">1</NumDaysRequested><TxtDateRange type=\"System.String\">Tuesday 31 December 2019</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Isabelle Harris</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">1</NumDaysRequested><TxtDateRange type=\"System.String\">Friday 12 March 2021</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\">Congés vus avec Stéphane</TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">David Dibenedetto</TxtCivilName><NumCompanyId type=\"System.Int32\">3</NumCompanyId><NumDaysRequested type=\"System.Int32\"></NumDaysRequested><TxtDateRange type=\"System.String\">Monday 15 March 2021</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Richard Tate</TxtCivilName><NumCompanyId type=\"System.Int32\">4</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Tue 16 Mar 21 to Wed 17 Mar 21</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Teresa P. Madruga</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Thu 11 Mar 21 to Fri 12 Mar 21</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Robert Johnson</TxtCivilName><NumCompanyId type=\"System.Int32\">4</NumCompanyId><NumDaysRequested type=\"System.Int32\">1</NumDaysRequested><TxtDateRange type=\"System.String\">Friday 19 March 2021</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\">To add in calendar Information & Digital Services</TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Rémi D'Almedo</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Émile-Bernard Gilles</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Alexandre Carlier</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\">Validated</TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Louise Blanchard</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Denise Mercier</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Mathilde Gaudreault</TxtCivilName><NumCompanyId type=\"System.Int32\">3</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">William Labelle</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Augustine Perreault</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Olivia Villeneuve</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Julien-Christophe St-Pierre</TxtCivilName><NumCompanyId type=\"System.Int32\">4</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Timothée Audet</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Kristian Brix-Jacobsen Vester</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Robert Beck</TxtCivilName><NumCompanyId type=\"System.Int32\"></NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Kathrine Falk</TxtCivilName><NumCompanyId type=\"System.Int32\">2</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Ibrahim Haugaard Lindholm-Ali</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Mohamed Brøndum</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\">Need adjustement</TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Winfield Wintheiser</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Emery Beahan</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Annette Morar</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Mon 18 Jan 21 to Tue 19 Jan 21</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\">covid</TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Ashton Conn</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Abelardo Stoltenberg</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Nadia Yost</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Cédric O</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Zaria Pacocha</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Validated and Treated</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Tyson Rosenbaum</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Yu Lee</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Mortimer Heidenreich</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Silas Dach</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">absence</TxtType><TxtCivilName type=\"System.String\">Maxime Silva</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">overtime</TxtType><TxtCivilName type=\"System.String\">Jean Maréchal</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Draft</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Margot Robinson</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>","<?xml version=\"1.0\" encoding=\"utf-8\"?><Item><TxtType type=\"System.String\">telework</TxtType><TxtCivilName type=\"System.String\">Julie de Maistre</TxtCivilName><NumCompanyId type=\"System.Int32\">1</NumCompanyId><NumDaysRequested type=\"System.Int32\">2</NumDaysRequested><TxtDateRange type=\"System.String\">From Wed 18 Sep 19 to Thu 19 Sep 19</TxtDateRange><TxtStatus type=\"System.String\">Hierarchy Validation</TxtStatus><TxtComment type=\"System.String\"></TxtComment></Item>"]

    var companiesMocks = [{
            id: 1,
            name: 'Company One',
        },
        {
            id: 2,
            name: 'Company Two',
        },
        {
            id: 3,
            name: 'Company Three',
        },
        {
            id: 4,
            name: 'Company Four',
        },
    ];

    var translations = {
        types: {
            'absence': 'Absence',
            'overtime': 'Overtime',
            'telework': 'Telework',
        }
    };

    return service;

    function getTasks() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(mock)
            }, Math.floor(Math.random() * 2000) + 100 )
        })
    }

    function getTranslations() {
        return new Promise((resolve, reject) => {
            var isZero = Math.floor(Math.random() * 2);
            if(isZero){
                resolve(translations);
             } else {
                console.warn('error while loading translations');
                reject(); // The translations server has some issue and don't always respond.
            }
        });
    }


    function getCompanies() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(companiesMocks)
            }, Math.floor(Math.random() * 1000) + 100 );
        })
    }

})();
