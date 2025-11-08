import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TGPFCP', ['codfuncao', 'codcompetencia', 'dtinicio'], {
  unique: true,
})
@Entity('TGPFCP', { schema: 'SANKHYA' })
export class TgpfcpEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'CODCOMPETENCIA' })
  codcompetencia: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpfcps)
  @JoinColumn([{ name: 'CODCOMPETENCIA', referencedColumnName: 'codperfil' }])
  codcompetencia2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpfcps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpfcps)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;
}
