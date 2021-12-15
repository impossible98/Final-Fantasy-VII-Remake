APP_NAME := template-ts
APP_VERSION := 0.0.0
BIN_NAME := template-ts

SHELL := /bin/bash

all:
	@node ./scripts/all.js

build: fmt
	node ./scripts/constants.js
	npm run dev

dev: lint
	node ./scripts/constants.js
	npm run dev
	node ./dist/main.js

fmt:
	npm run fmt

help:
	node ./scripts/help.js

lint:
	npm run lint

start:
	@node ./dist/main.js

tag:
	git tag -a v$(APP_VERSION) -m "Release $(APP_VERSION)"
