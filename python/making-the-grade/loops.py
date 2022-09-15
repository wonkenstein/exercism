"""Functions for organizing and calculating student exam scores."""
from math import ceil


PASS_MARK = 41


def round_scores(student_scores):
    """Round all provided student scores.

    :param student_scores: list - float or int of student exam scores.
    :return: list - student scores *rounded* to nearest integer value.
    """
    def round_score(score):
        return round(score)

    return map(round_score, student_scores)


def count_failed_students(student_scores):
    """Count the number of failing students out of the group provided.

    :param student_scores: list - containing int student scores.
    :return: int - count of student scores at or below 40.
    """
    failed = 0
    for score in student_scores:
        if score < PASS_MARK:
            failed += 1

    return failed


def above_threshold(student_scores, threshold):
    """Determine how many of the provided student scores were 'the best'
    based on the provided threshold.

    :param student_scores: list - of integer scores.
    :param threshold: int - threshold to cross to be the "best" score.
    :return: list - of integer scores that are at or above the "best" threshold.
    """

    scores_above_threshold = []
    for score in student_scores:
        if score >= threshold:
            scores_above_threshold.append(score)

    return scores_above_threshold


def letter_grades(highest):
    """Create a list of grade thresholds based on the provided highest grade.

    :param highest: int - value of highest exam score.
    :return: list - of lower threshold scores for each D-A letter grade interval.
            For example, where the highest score is 100, and failing is <= 40,
            The result would be [41, 56, 71, 86]:

            41 <= "D" <= 55
            56 <= "C" <= 70
            71 <= "B" <= 85
            86 <= "A" <= 100
    """
    delta = highest - PASS_MARK
    num_bands = 4
    grade_steps = delta / num_bands

    grades = []

    for index in range(num_bands):
        step = index * grade_steps + PASS_MARK
        grades.append(ceil(step))

    return grades


def student_ranking(student_scores, student_names):
    """Organize the student's rank, name, and grade information in ascending order.

    :param student_scores: list - of scores in descending order.
    :param student_names: list - of string names by exam score in descending order.
    :return: list - of strings in format ["<rank>. <student name>: <score>"].
    """

    rankings = []
    for index, score in enumerate(student_scores):
        student_name = student_names[index]
        rankings.append(str(index+1) + '. ' + student_name + ': ' + str(score))

    return rankings


def perfect_score(student_info):
    """Create a list that contains the name and grade of the first student to
    make a perfect score on the exam.

    :param student_info: list - of [<student name>, <score>] lists.
    :return: list - first `[<student name>, 100]` or `[]` if no student score of
    100 is found.
    """
    threshold_score = 100
    for student in student_info:
        student_score = student[1]

        if student_score >= threshold_score:
            return student

    return []
