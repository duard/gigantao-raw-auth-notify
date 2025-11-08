import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TgptarEntity } from './tGPTAR.entity';

@Index('PK_TGPTCP', ['codtarefa', 'codcompetencia', 'dtinicio'], {
  unique: true,
})
@Entity('TGPTCP', { schema: 'SANKHYA' })
export class TgptcpEntity {
  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('int', { primary: true, name: 'CODCOMPETENCIA' })
  codcompetencia: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgptcps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgptcps)
  @JoinColumn([{ name: 'CODCOMPETENCIA', referencedColumnName: 'codperfil' }])
  codcompetencia2: TfpperEntity;

  @ManyToOne(() => TgptarEntity, (tgptarEntity) => tgptarEntity.tgptcps)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa2: TgptarEntity;
}
