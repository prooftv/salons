/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Dropdown, NavLink, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import ActiveLink from "@components/ActiveLink";
import Avatar from "@components/Avatar";
import userMenu from "@utils/data/user-menu.json";

export default function UserMenu({ onLinkClick }) {
  const { user, error, isLoading } = useUser();

  return (
    <Dropdown
      as={NavItem}
      className={userMenu.type === "avatar" ? "ms-lg-3" : ""}
    >
      <Dropdown.Toggle
        as={NavLink}
        style={userMenu.type === "avatar" && { padding: 0 }}
        className="dropdown-avatar"
      >
        {userMenu.type === "avatar" ? (
          <Avatar
            image={user.picture}
            alt={user.name}
            className="me-2 avatar-border-white"
            size="sm"
            cover
          />
        ) : (
          user.nickname
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        {userMenu.dropdown &&
          userMenu.dropdown.map((dropdownItem, index) =>
            !dropdownItem.divider ? (
              <ActiveLink
                key={index}
                activeClassName="active"
                href={dropdownItem.link}
                passHref
              >
                <Dropdown.Item onClick={() => onLinkClick(userMenu.title)}>
                  {dropdownItem.signout && (
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="me-2 text-muted"
                    />
                  )}
                  {dropdownItem.title}
                </Dropdown.Item>
              </ActiveLink>
            ) : (
              <Dropdown.Divider key={index} />
            )
          )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
