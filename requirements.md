Sources: Zoho Creator App, Zoho Creator API Zoho Analytics API - data fed from Zoho Creator Ap, JSON feed from PHP file 

The dashboard is an athlete report.

Requirements: 
1. Profile with data fed from Zoho Creator API - Athlete Name, Gender etc.. 
2. Section for Skill Level with Donut Charts using data fed using Zoho Analytics API 
3. Combine Results Section Data Table using Zoho Creator API & Zoho Analytics API - Test results from each test of the combine (include NA for athlete but AVG or MAX/MIN in combine evaluation)
4. Combine Results Bullet Graph Section using Zoho Creator API & Zoho Analytics API - Test results from each test of the combine (include NA for athlete but AVG or MAX/MIN in combine evaluation) 
5. Visual Sensory Results Section - Results from Zoho Creator API 
6. Cognitive Results Section (ability to drop down section for in detail information) - Results from Zoho Creator API (Could use Zoho Analytics API for Categorical Level Information) 
7. Type Reports Section (data fed from Zoho Creator API & PHP API / json feed) 


DATA provided REACTJS app requirements for ANIQ

->  The visuals in the attachement - http://myedge.boxout.ca/app/report.php
->  JSON feed for 1 user as an example for section 7. - http://myedge.boxout.ca/report/type.php?RID=106&UserID=78561
->  zoho login credentials: team@boxout.ca password: space5space



API wrapper requirements for ZAKI

1. Profile information
•	Zoho Creator Report View: https://app.zohocreator.com/boxout/ams#Report:athletedb
•	Zoho Creator Form View: https://app.zohocreator.com/boxout/ams#Form:add_athlete
•	Zoho Analytics Data View: https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001666062
•	Athlete Info @ Combine Date: https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001730154

2. Section for Skill Level with Donut Charts
•	Calculation for Skill Level for athlete is achieved by averaging ‘Score’ column of Combine Results Statistics Table (https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001730291) for all tests within a ‘Test Category’ Level in Add Testing Protocol table (https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001666104) joining on ‘Test ID’
•	See https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001765005 for example of test results by athlete and test category

3. Combine Results Section Data Table - Test results from each test of the combine (include NA for athlete but AVG or MAX/MIN in combine evaluation) 
•	Athlete Results by Test for each Combine available here - 
•	Combine Results Max/Min/Avg available here: https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001680633

4. Combine Results Bullet Graph Section - same as above
•	Athlete Results by Test for each Combine available here - 
•	Combine Results Max/Min/Avg available here: 

5. Visual Sensory Results Section 
•	Visual Sensory Results Table - https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001708542

6. Cognitive Results Section (ability to drop down section for in detail information) - 
•	Cognitive Results Table - https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001704925

7. Athlete Type Reports Section (data fed from Zoho Creator API & PHP API / json feed)
•	TAP Results Table - https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001723002
•	Additional Reports for Athlete by ID that needs to be included in app - http://myedge.boxout.ca/report/type.php?RID=106&UserID=78561

For #6 - The details of each cognitive skill can be found here: https://analytics.zoho.com/workspace/1480941000001666001/view/1480941000001666034