import React from 'react'
import "./assyNo.css"
import { useTranslation } from 'react-i18next'

function BodyNo() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='montaj-no'>
                <label>
                    {t("common.Assembly No")}
                    <input type="text" />
                </label>
            </div>
            <div className='button-search'>{t("button.Search")}</div>
        </div>
    )
}

export default BodyNo
