Feature: Logowanie

    Scenario: Prawidłowe zalogowanie się do aplikacji

        Given cos innego
        When Wpisuję login i hasło
        And Klikam w przycisk Zaloguj
        Then Jestem zalogowany do aplikacji