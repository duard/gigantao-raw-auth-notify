import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWLCN', ['codlog'], { unique: true })
@Entity('TGWLCN', { schema: 'SANKHYA' })
export class TgwlcnEntity {
  @Column('int', { primary: true, name: 'CODLOG' })
  codlog: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;
}
