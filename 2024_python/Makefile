TEST_ARGS ?=

venv:
	pipenv shell

test:
	pipenv run pytest $(TEST_ARGS)

coverage:
	pipenv run coverage run -m pytest
	pipenv run coverage report
	pipenv run coverage html
	# @echo "Open htmlcov/index.html to view the coverage report"

.PHONY: venv test coverage