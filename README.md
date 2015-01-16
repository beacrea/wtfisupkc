# Introduction
This is a simple web app with a simple purpose: to tell why downtown kansas city might be shitty at any given time.

# Functionality
The goal here is to have scraped data (through kimono) available from prominent venues around the downtown area that might contribute to heavy traffic. The app will take the current time, then compare it to the available event data to see if there's a match within a range of [-1.5hour > event > 1hour]. Plus, it'll identify common things, like rush hour and maybe streetcar contruction (which can also be scraped).

# Technical Considerations
As data is scraped periodically, it needs to be marshalled, groomed, and stored in a database for easy access. As it stands, kimono can be slow, and multiple json requests for multiple venues isn't ideal.

This application is also designed to fit in the MEAN stack architecture, for simplicity, exploration, and fun.

# Future
The application may be able to be expanded to other districts in the future, but downtown is the primary target.