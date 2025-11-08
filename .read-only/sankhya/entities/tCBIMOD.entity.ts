import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TCBIMOD', ['codproj', 'codnat', 'codemp', 'referencia'], {
  unique: true,
})
@Entity('TCBIMOD', { schema: 'SANKHYA' })
export class TcbimodEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'DESPMES', nullable: true, precision: 53 })
  despmes: number | null;

  @Column('float', { name: 'DESPACUM', nullable: true, precision: 53 })
  despacum: number | null;

  @Column('float', { name: 'CUSTOINC', nullable: true, precision: 53 })
  custoinc: number | null;

  @Column('float', { name: 'CUSTOINCANTACUM', nullable: true, precision: 53 })
  custoincantacum: number | null;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('float', { name: 'M2ACUM', nullable: true, precision: 53 })
  m2Acum: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcbimods)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbimods)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcbimods)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
