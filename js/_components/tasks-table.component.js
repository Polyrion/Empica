window.TasksTableComponent = (function (window) {
    'use strict'

    return function (tasks) {
        var self = this;

        self.tasks = tasks;
        self.columns = [
            {
                label: 'Name',
                property: 'TxtCivilName',
                aggregateFn: (item) => {
                    return 1;
                },
                aggregateLabel: 'Number of tasks : ',
            },
            {
                label: 'Number of days',
                property: 'NumDaysRequested',
                defaultValue: '0',
                aggregateFn: (item) => {
                    return item['NumDaysRequested'];
                },
                aggregateLabel: 'Total (in days) : ',
            },
            {
                label: 'Type',
                property: 'TxtType'
            },
            {
                label: 'Date range',
                property: 'TxtDateRange',
            },
            {
                label: 'Company',
                property: 'TxtCompanyName',
            }
        ];

        return {
            render,
            setTasks,
        }

        /**
         * render data
         * @param element
         */
        function render(element) {
            element.innerHTML = '';
            element.append(getTableElement());
        }

        /**
         * Return the html
         * @returns {HTMLTableElement}
         */
        function getTableElement() {
            const tableEl = document.createElement('table');
            tableEl.setAttribute('class', 'Tasks');
        
            self.tasks.forEach((task, index) => {
                if (index === 0) {
                    tableEl.append(getHeaderElement(task));
                }
                const line = getLineElement(task);
                tableEl.append(line);
                line.addEventListener('click', () => alert(task.TxtCivilName));
            });
        
            tableEl.append(getFooterElement(self.aggregatedValues));
            return tableEl;
        }


        /**
         * Return the content of a line in HTML string
         *
         * @returns {HTMLTableSectionElement}
         */
        function getHeaderElement() {
            var columns = [];
            for (var i = 0; i < self.columns.length; i++) {
                var col = self.columns[i];
                columns.push(`<th>${col.label}</th>`);
            }

            var head = document.createElement('thead');
            head.innerHTML = `<tr>${columns.join('')}</tr>`
            return head;
        }

        /**
         * Return the content of a line in HTML string
         *
         * @param task
         * @returns {HTMLTableSectionElement}
         */
        function getLineElement(task) {
            var columns = [];

            for (var i = 0; i < self.columns.length; i++) {
                var col = self.columns[i];
                columns.push(`<td>${task[col.property] || col.defaultValue || ''}</td>`);
            }

            var tr = document.createElement('tr');
            tr.innerHTML = columns.join('');
            return tr;
        }

        /**
         * Return the content of a footer line in HTML string
         *
         * @param aggregatedLine
         * @returns {HTMLTableSectionElement}
         */
        function getFooterElement(aggregatedLine) {
            const columns = self.columns.map(col => {
                const value = aggregatedLine[col.property];
                return aggregatedLine.hasOwnProperty(col.property)
                    ? `<td>${col.aggregateLabel} ${value}</td>`
                    : `<td></td>`
            });

            const tfoot = document.createElement('tfoot');
            tfoot.innerHTML = `<tr>${columns.join('')}</tr>`;
            return tfoot;
        }

        function setTasks(tasks) {
            self.tasks = tasks;
            self.aggregatedValues = getAggregatedValues(tasks);
        }

        /**
         * Return aggregated values from given tasks data
         *
         * @param tasks
         * @returns {{}}
         */
        function getAggregatedValues(tasks) {
            const aggregatedValues = {};
        
            tasks.forEach(task => {
                self.columns.forEach(col => {
                    if (col.hasOwnProperty('aggregateFn')) {
                        const property = col.property;
                        const value = col.aggregateFn(task);
                        
                        if (typeof value === 'number' && !isNaN(value)) {
                            if (!(property in aggregatedValues)) {
                                aggregatedValues[property] = 0;
                            }
                            
                            aggregatedValues[property] += value;
                        }
                    }
                });
            });
        
            return aggregatedValues;
        }
        
        
    };

})(window)