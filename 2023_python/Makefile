ARGS?=

venv:
	pipenv shell

tests:
	python3 -B -m unittest discover -s tests/**/ -p "*.py" $(ARGS)

coverage:
	coverage run -m unittest discover -s tests/**/ -p "*.py"
	coverage report

.PHONY: venv tests coverage
