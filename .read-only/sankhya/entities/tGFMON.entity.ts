import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsirfeEntity } from './tSIRFE.entity';
import { TgfnumEntity } from './tGFNUM.entity';
import { TgftemEntity } from './tGFTEM.entity';
import { TgftopEntity } from './tGFTOP.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TGFMON', ['codmodnf'], { unique: true })
@Entity('TGFMON', { schema: 'SANKHYA' })
export class TgfmonEntity {
  @Column('smallint', { primary: true, name: 'CODMODNF' })
  codmodnf: number;

  @Column('char', { name: 'NOME', nullable: true, length: 40 })
  nome: string | null;

  @Column('char', { name: 'CAMINHO', nullable: true, length: 255 })
  caminho: string | null;

  @Column('char', { name: 'TIPOIMPRESSORA', length: 1, default: () => "'1'" })
  tipoimpressora: string;

  @Column('varchar', { name: 'CAMINHOSW', nullable: true, length: 255 })
  caminhosw: string | null;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codmoddacte)
  tgfemps: TgfempEntity[];

  @OneToMany(
    () => TgfempEntity,
    (tgfempEntity) => tgfempEntity.codmoddanfecontingencia,
  )
  tgfemps2: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codmodnfcesimpl)
  tgfemps3: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codmodnfcecompl)
  tgfemps4: TgfempEntity[];

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codmoddanfe)
  tgfemps5: TgfempEntity[];

  @ManyToOne(() => TsirfeEntity, (tsirfeEntity) => tsirfeEntity.tgfmons)
  @JoinColumn([{ name: 'NURFE', referencedColumnName: 'nurfe' }])
  nurfe: TsirfeEntity;

  @OneToMany(() => TgfnumEntity, (tgfnumEntity) => tgfnumEntity.modnotafis)
  tgfnums: TgfnumEntity[];

  @OneToMany(() => TgftemEntity, (tgftemEntity) => tgftemEntity.modelo)
  tgftems: TgftemEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmodcfecanc)
  tgftops: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmodnfse)
  tgftops2: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmodrps)
  tgftops3: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmodnf)
  tgftops4: TgftopEntity[];

  @OneToMany(() => TgftopEntity, (tgftopEntity) => tgftopEntity.codmoddad)
  tgftops5: TgftopEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.codmodnf)
  tssitps: TssitpEntity[];
}
