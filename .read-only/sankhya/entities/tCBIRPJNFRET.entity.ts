import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TcbempEntity } from './tCBEMP.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcbirpjEntity } from './tCBIRPJ.entity';

@Index('PK_TCBIRPJNFRET', ['codemp', 'referencia', 'nunota'], { unique: true })
@Entity('TCBIRPJNFRET', { schema: 'SANKHYA' })
export class TcbirpjnfretEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('float', { name: 'VLRIRPJ', nullable: true, precision: 53 })
  vlrirpj: number | null;

  @Column('float', { name: 'VLRCSLL', nullable: true, precision: 53 })
  vlrcsll: number | null;

  @Column('char', { name: 'RETEMIRPJCSLL', nullable: true, length: 1 })
  retemirpjcsll: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcbirpjnfrets)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbirpjnfrets)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcbirpjnfrets)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(
    () => TcbirpjEntity,
    (tcbirpjEntity) => tcbirpjEntity.tcbirpjnfrets,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tcbirpj: TcbirpjEntity;
}
