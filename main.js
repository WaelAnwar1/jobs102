const jobs = [
    {
        title:"Security Officer",
        image:"images/security-officer.png",
        details:"Overall, security officers are tasked with securing the premises and personnel by staying on patrol monitoring surveillance equipment performing building inspections",
        openpositions:"2",
        link:"#"
    },
    {
        title:"Cashier",
        image:"images/cashier.jpg",
        details:"Collects payments by accepting cash, check, or charge payments from customers and makes change for cash customers. Verifies credit acceptance by reviewing and recording driver's license number; and operating credit card authorization systems.",
        openpositions:"3",
        link:"#"
    },
    {
        title:"Barman",
        image:"images/barman.png",
        details:"Receives orders from patrons and waitstaff.Prepares and serves, drinks as ordered.",
        openpositions:"4",
        link:"#"
    },
    {
        title:"Steward",
        image:"images/steward.jpg",
        details:"Greeting customers, guiding them to tables and delivering drinks from the bartender. Clearing, cleaning and setting tables. Ensuring serving stations are stocked with cutlery, napkins, trays, and condiments.",
        openpositions:"4",
        link:"#"
    },
    {
        title:"Chef",
        image:"images/chef.png",
        details:"Direct the preparation, seasoning, and cooking of salads, soups, fish, meats, vegetables, desserts, or other foods. Plan and price menu items, orders supplies,",
        openpositions:"1",
        link:"#"
    },
    {
        title:"Chef Accountant",
        image:"images/accountant.png",
        details:"Your job duties as chief accountant include overseeing the accounting department, developing financial strategies, making investment decisions, helping company leadership with strategic ",
        openpositions:"1",
        link:"#"
    },
    {
        title:"IT Technician",
        image:"images/technician.png",
        details:"responsible for installing, maintaining and repairing hardware & software components of the organization's computers. They also support these systems through ",
        openpositions:"1",
        link:"#"
    },
    {
        title:"Food & Beverage Server",
        image:"images/service.png",
        details:"Preparing restaurant tables with special attention to sanitation and order Attending to customers upon entrance to the restaurant Presenting menus, serving and helping custo",
        openpositions:"5",
        link:"#"
    },
    {
        title:"HouseKeeper",
        image:"images/housekeeper.png",
        details:"responsible for taking care of a building's general cleanliness to provide tidy and sanitary amenities to guests and residents. Their duties include cleaning floors, makin",
        openpositions:"6",
        link:"#"
    },
    {
        title:"Store Keeper",
        image:"images/storekeeper.png",
        details:"Collect, process, and document all merchandise received and paid for, assisting with inventory activities as necessary. Assist in receiving all merchandise from suppliers. Check all merchandise for discrepancies and da",
        openpositions:"1",
        link:"#"
    },
    {
        title:"Pool Guard",
        image:"images/pool-guard.png",
        details:"Warns swimmers of improper activities or danger and enforces pool regulations and water safety policies. Administers first aid in the event of injury,",
        openpositions:"",
        link:"#"
    },
    {
        title:"Maint. Technicain",
        image:"images/maintenanace.png",
        details:"Maintenance Engineers are responsible for the continuous operation of machinery and equipment. Using computerised systems, they organise repairs and oversee routine maintenance. They're also involved with monitoring and control devices and sometimes in the creation",
        openpositions:"2",
        link:"#"
    },

];

const JobsHeading= document.querySelector(".jobs-list-container h2");
if(jobs.length == 1)
{
    JobsHeading.innerHTML=`${jobs.length} job`;
}
else
{
    JobsHeading.innerHTML=`${jobs.length} jobs`;
}
