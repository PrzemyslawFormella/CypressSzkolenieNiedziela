Feature: Logowanie

    Scenario: Prawidłowe zalogowanie się do aplikacji

        Given Otwieram strone
        When Wpisuję login i hasło
        And Klikam w przycisk Zaloguj
        Then Jestem zalogowany do aplikacji