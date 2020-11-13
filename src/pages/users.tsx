import React, {Fragment} from 'react';
import {GetStaticProps} from "next";
import {GetMyUsersDocument, useGetMyUsersQuery} from "../generated/graphql";
import {InitialApolloState} from "./index";
import {initializeApollo} from "../lib/apolloClient";
import Link from "next/link";

const Users = () => {
    const {data} = useGetMyUsersQuery()

    return (
        <div className="animate__animated animate__fadeInLeft">
            <Link href={"/"}>
                <a style={{marginRight: 5}}>
                    Index
                </a>
            </Link>
            <Link href={"/github"}>
                Github
            </Link>
            {
                data.users.map(user => (
                    <Fragment key={user.id}>
                        <h2> {user.name} </h2>
                        <h2> {user.description} </h2>
                        <img alt={user.name} src={user.image.slice(0, 8) === "https://" ?
                            user.image :
                            "https://storage.googleapis.com/social_todos/" + user.image}
                        />
                    </Fragment>
                ))
            }
        </div>
    );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: GetMyUsersDocument
    })
    return {
        props: {
            initialApolloState: apolloClient.cache.extract()
        }
    }
}

export default Users;