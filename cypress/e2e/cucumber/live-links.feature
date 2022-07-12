Feature: w3.org is browsable
Scenario: Visiting htmlcss page on w3.org
  Given The "htmlcss" page opens without error
  Then The console does not have errors
  And All links on the page are live

Scenario: Visiting multimodal page on w3.org
  Given The "multimodal" page opens without error
  Then The console does not have errors
  And All links on the page are live
  
Scenario: Visiting badpage page on w3.org
  Given The "badpage" page opens without error
  Then The console does not have errors
  And All links on the page are live