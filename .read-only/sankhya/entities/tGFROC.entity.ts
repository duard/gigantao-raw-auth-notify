import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFROC', ['codemp', 'codparctef', 'referencia', 'sequencia'], {
  unique: true,
})
@Entity('TGFROC', { schema: 'SANKHYA' })
export class TgfrocEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARCTEF' })
  codparctef: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'VLRVENDASDEB', nullable: true, precision: 53 })
  vlrvendasdeb: number | null;

  @Column('float', { name: 'VLRVENDASCRED', nullable: true, precision: 53 })
  vlrvendascred: number | null;

  @Column('int', { name: 'CODPARCTEF1601', nullable: true })
  codparctef1601: number | null;

  @Column('int', { name: 'CODPARCINTER1601', nullable: true })
  codparcinter1601: number | null;

  @Column('float', { name: 'VLRBRUTVEN1601', nullable: true, precision: 53 })
  vlrbrutven1601: number | null;

  @Column('float', { name: 'VLRBRUTSERV1601', nullable: true, precision: 53 })
  vlrbrutserv1601: number | null;

  @Column('float', { name: 'VLRVENDOUT1601', nullable: true, precision: 53 })
  vlrvendout1601: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfrocs)
  @JoinColumn([{ name: 'CODPARCTEF', referencedColumnName: 'codparc' }])
  codparctef2: TgfparEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfrocs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
