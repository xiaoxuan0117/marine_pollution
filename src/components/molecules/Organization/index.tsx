import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";
import OrganizationItem from "../../atoms/OrganizationItem";

export default function Organization() {
  const { t } = useTranslation(["otherInfo"]);

  const organizationItems = [
    {
      type: "greenpeace",
      title: t("greenpeace"),
      context: t("greenpeace-value"),
      href: "https://www.greenpeace.org/taiwan/%E6%B5%B7%E6%B4%8B/",
    },
    {
      type: "theOceanCleanup",
      title: t("theOceanCleanup"),
      context: t("theOceanCleanup-value"),
      href: "https://theoceancleanup.com/",
    },
    {
      type: "coralReefAlliance",
      title: t("coralReefAlliance"),
      context: t("coralReefAlliance-value"),
      href: "https://coral.org/",
    },
  ];
  return (
    <div className="organization-wrapper">
      <div className="organization">
        <div className="title">{t("organization-title")}</div>
        <div className="items-section">
          <div className="items">
            {organizationItems &&
              organizationItems.map((organizationItem) => (
                <div
                  key={organizationItem.type}
                  className={`item ${organizationItem.type}`}
                >
                  <OrganizationItem
                    type={organizationItem.type}
                    title={organizationItem.title}
                    context={organizationItem.context}
                    href={organizationItem.href}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
