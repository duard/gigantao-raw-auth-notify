import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfcredcliEntity } from './tGFCREDCLI.entity';

@Index('PK_TGFCRED', ['codcontrato'], { unique: true })
@Entity('TGFCRED', { schema: 'SANKHYA' })
export class TgfcredEntity {
  @Column('int', { primary: true, name: 'CODCONTRATO' })
  codcontrato: number;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('float', { name: 'VLRCONTRATO', precision: 53 })
  vlrcontrato: number;

  @Column('float', { name: 'VLRENTRADA', precision: 53, default: () => '(0)' })
  vlrentrada: number;

  @Column('int', { name: 'QTDPARCELAS' })
  qtdparcelas: number;

  @Column('varchar', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('varchar', { name: 'RENEGOCIADO', length: 1, default: () => "'N'" })
  renegociado: string;

  @Column('varchar', { name: 'AVALISTA', length: 1 })
  avalista: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcreds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcreds)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(
    () => TgfcredcliEntity,
    (tgfcredcliEntity) => tgfcredcliEntity.tgfcreds,
  )
  @JoinColumn([{ name: 'CODCLIENTE', referencedColumnName: 'codcliente' }])
  codcliente: TgfcredcliEntity;

  @ManyToOne(() => TgfcredEntity, (tgfcredEntity) => tgfcredEntity.tgfcreds)
  @JoinColumn([
    { name: 'CODCONTRATOORIG', referencedColumnName: 'codcontrato' },
  ])
  codcontratoorig: TgfcredEntity;

  @OneToMany(
    () => TgfcredEntity,
    (tgfcredEntity) => tgfcredEntity.codcontratoorig,
  )
  tgfcreds: TgfcredEntity[];
}
