Feature: pokemon Fight

  2 pokemon in the field should fight the

  Scenario: Galopa outspeed evoli
    Given A galopa with 70 in speed
    And a evoli with 50 in speed
    When they fight
    Then Galopa attack first