Feature: pokemon Fight

  2 pokemon in the field should fight the

  Scenario: Galopa outspeed evoli
    Given A galopa with 70 in speed
    And a evoli with 50 in speed
    When they fight
    Then Galopa attack first

  Scenario: Galopa is outspeed by pikachu
    Given A galopa with 70 in speed
    And a pikatchu with 80 in speed
    When they fight
    Then Pikatchu attack first


  Scenario: Speed equal
    Given two galopa with 70 in speed
    When they fight
    Then the second galopa win