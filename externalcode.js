/**
 *  Copyright 2020 Julien Pierret
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const Externalcode = {
    id: "externalcode",
    init: (reveal) => {
      function fetchDataCodeSection(section) {
        url = section.getAttribute("data-code");
        return fetch(url)
          .then((response) => response.text())
          .then((data) => {
            section.textContent = data;
          });
      }

      function fetchHtmlSection(section) {
        url = section.getAttribute("html-insert");
        return fetch(url)
          .then((response) => response.text())
          .then((data) => {
            section.innerHTML = data;
          });
      }
  
      var sections = document.querySelectorAll("[data-code], [html-insert]");
      var promiseArray = new Array(sections.length);
  
      for (var i = 0, len = sections.length; i < len; i++) {
        section = sections[i];
        if (section.getAttribute("data-code") != null) {
          promiseArray[i] = fetchDataCodeSection(section);
        }

        if (section.getAttribute("html-insert") != null) {
          promiseArray[i] = fetchHtmlSection(section);
        }
      }
      return Promise.all(promiseArray);
    },
  };
  