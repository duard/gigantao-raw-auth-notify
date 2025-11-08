import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgacllEntity } from './tGACLL.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TgftamEntity } from './tGFTAM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFRAM', ['nuram'], { unique: true })
@Index('TGFRAM_I_NUNOTA', ['nunota'], {})
@Index('TGFRAM_I01', ['sequencia', 'status'], {})
@Entity('TGFRAM', { schema: 'SANKHYA' })
export class TgframEntity {
  @Column('int', { primary: true, name: 'NURAM' })
  nuram: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DTFABRICACAO', nullable: true })
  dtfabricacao: Date | null;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'QTDTOTVOL', nullable: true })
  qtdtotvol: number | null;

  @Column('int', { name: 'QTDVOLAMOSTRA', nullable: true })
  qtdvolamostra: number | null;

  @Column('float', { name: 'QTDAMOSTRA', nullable: true, precision: 53 })
  qtdamostra: number | null;

  @Column('datetime', { name: 'DHCOLETA', nullable: true })
  dhcoleta: Date | null;

  @Column('datetime', { name: 'DHCONFERENCIA', nullable: true })
  dhconferencia: Date | null;

  @Column('datetime', { name: 'DHPROTOCOL', nullable: true })
  dhprotocol: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('varchar', {
    name: 'DESMEMBRAMENTO',
    length: 1,
    default: () => "'N'",
  })
  desmembramento: string;

  @OneToMany(() => TgacllEntity, (tgacllEntity) => tgacllEntity.nuram2)
  tgaclls: TgacllEntity[];

  @ManyToOne(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.tgframs)
  @JoinColumn([{ name: 'IDIPROC', referencedColumnName: 'idiproc' }])
  idiproc: TpriprocEntity;

  @ManyToOne(() => TgftamEntity, (tgftamEntity) => tgftamEntity.tgframs)
  @JoinColumn([
    { name: 'CODTIPAMOSTRA', referencedColumnName: 'codtipamostra' },
  ])
  codtipamostra: TgftamEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgframs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgframs)
  @JoinColumn([{ name: 'CODUSUCOLETA', referencedColumnName: 'codusu' }])
  codusucoleta: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgframs2)
  @JoinColumn([{ name: 'CODUSUCONFERENCIA', referencedColumnName: 'codusu' }])
  codusuconferencia: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgframs3)
  @JoinColumn([{ name: 'CODUSUPROTOCOL', referencedColumnName: 'codusu' }])
  codusuprotocol: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgframs4)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
