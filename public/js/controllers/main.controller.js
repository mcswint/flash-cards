app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
    $scope.getAllCards = function () {
        $scope.currentCategory = null;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
        });
    };
    $scope.score = ScoreFactory;
    $scope.getAllCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
            if (flashCard.answeredCorrectly){
                $scope.score.correct += 1;
            } else {
                $scope.score.incorrect +=1;
            }
		}
	}

    $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
    ];

    $scope.isCurrentCatagory = function(category) {
        if ($scope.currentCategory === category){
            return true;
        } else {
            return false;
        }
    };

    $scope.getCategoryCards = function(category) {
        $scope.currentCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function(cards){
            $scope.flashCards = cards;
        });
    };
});

