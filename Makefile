TOOLCHAIN := toolchain
BUILDDIR := builds
JRUBYGET := https://s3.amazonaws.com/jruby.org/downloads/1.7.19/jruby-complete-1.7.19.jar
JRUBY := ${TOOLCHAIN}/jruby-complete.jar
VERSION := 1.0

.PHONY: all clean distribute
all: js css build

js: ${BUILDDIR}
	mkdir -p ${BUILDDIR}/javascript
	java -jar ${TOOLCHAIN}/compressor.jar -o javascript/jis.jquery.min.js javascript/jis.jquery.js && \
	cp javascript/jis.jquery.min.js ${BUILDDIR}/javascript/jis.jquery.min.js

css: ${BUILDDIR}
	mkdir -p ${BUILDDIR}/stylesheets
	java -jar ${JRUBY} -S compass compile --app-dir=. --sass-dir=stylesheets --images-dir=images --output-style=compressed && \
	java -jar ${TOOLCHAIN}/compressor.jar -o stylesheets/jis.min.css stylesheets/jis.css && \
	cp stylesheets/jis.min.css ${BUILDDIR}/stylesheets/jis.min.css && \
	rm stylesheets/jis.css && \
	mkdir -p ${BUILDDIR}/images && \
	cp -R images/slide ${BUILDDIR}/images

$(BUILDDIR): ${TOOLCHAIN}
	mkdir -p ${BUILDDIR}

$(TOOLCHAIN):
	mkdir -p ${TOOLCHAIN}
	wget ${JRUBYGET} && mv jruby-complete-1.7.19.jar ${JRUBY} && \
	java -jar ${JRUBY} -S gem install -i ${TOOLCHAIN}/gems shared sass compass yuicompressor --no-rdoc --no-ri && \
	jar uf ${JRUBY} -C ${TOOLCHAIN}/gems . && \
	cp ${TOOLCHAIN}/gems/gems/*compressor*/lib/*compressor*.jar ${TOOLCHAIN}/compressor.jar

build: ${BUILDDIR}
	cp LICENSE ${BUILDDIR}
	cp README.md ${BUILDDIR}
	cd ${BUILDDIR} && zip -r jis-${VERSION}.zip ./ && mv jis-${VERSION}.zip ../

clean:
	rm -rf ${BUILDDIR}
	rm -rf ${TOOLCHAIN}
	rm -f jis-${VERSION}.zip
	rm -f images/elements-*.png

