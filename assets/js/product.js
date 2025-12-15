

// Helper function to render image
function renderImage(url, alt) {
    return `
					<img class="table-popup-image" src="${url}" alt="${alt}" 
                style="width:120px; height:80px; object-fit:cover; border-radius:4px; border:1px solid #ccc;">`;
}
// Helper function to format price
function renderPrice(amount) {
    // Check if amount is a number
    if (typeof amount === 'number' && !isNaN(amount)) {
        return '฿ ' + amount.toLocaleString();
    }
    // Return original value if not a number
    return amount;
}
// Generate the detail row dynamically, skipping main columns
function formatDetails(rowData) {
    let html = `
						<table class="table table-sm table-borderless mt-2">`;
    Object.keys(rowData).forEach(key => {
        if (["Image_URL", "Machine_Name", "Price_THB"].includes(key)) return;
        let value = rowData[key];
        if (typeof value === 'number') value = value.toLocaleString();
        html += `
							<tr>
								<td class="fw-bold">${key.replace(/_/g, ' ')}</td>
								<td>${value}</td>
							</tr>`;
    });
    html += `
						</table>`;
    return html;
}

// Use right-pointing ► and down-pointing ▼
const ICON_COLLAPSED = '➤';
const ICON_EXPANDED = '▼';
// Fetch data and initialize DataTable
fetch("data/tvd-products.json").then(res => res.json()).then(data => {
    debugger;
    const table = $('#cncTable').DataTable({
        data: data,
        columns: [{
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: ICON_COLLAPSED
        }, {
            data: null,
            render: function (d) {
                return renderImage(d.Image_URL, d.Machine_Name);
            }
        }, {
            data: 'Machine_Name'
        }, {
            data: 'Price_THB',
            render: function (d) {
                return renderPrice(d);
            }
        }, {
            data: 'Stock'
        },],
        order: [
            [2, 'asc']
        ], // Sort by Machine Name
        pageLength: 5,
        lengthMenu: [5, 10, 20, 50],
        responsive: {
            details: {
                type: 'column',
                target: 'td.dt-control'
            }
        },
        columnDefs: [{
            className: 'dt-control',
            orderable: false,
            targets: 0
        }],
        autoWidth: false,
        dom: 'fltip',
        pagingType: "numbers", // show only page numbers
        info: false,
        lengthChange: false,
        language: {
            search: "ค้นหา :"
        }
    });
    // Expand/Collapse child row on click, excluding image column (index 1)
    $('#cncTable tbody').on('click', 'tr td:not(:first-child):not(:nth-child(2))', function () {
        const tr = $(this).closest('tr');
        const row = table.row(tr);
        const controlCell = tr.find('td.dt-control');

        if (row.child.isShown()) {
            row.child.hide();
            controlCell.text(ICON_COLLAPSED);
        } else {
            row.child(formatDetails(row.data())).show();
            controlCell.text(ICON_EXPANDED);
        }
    });

    // Optionally keep the first column (+/-) clickable too
    $('#cncTable tbody').on('click', 'td.dt-control', function () {
        const tr = $(this).closest('tr');
        const row = table.row(tr);
        const controlCell = $(this);

        if (row.child.isShown()) {
            row.child.hide();
            controlCell.text(ICON_COLLAPSED);
        } else {
            row.child(formatDetails(row.data())).show();
            controlCell.text(ICON_EXPANDED);
        }
    });
});