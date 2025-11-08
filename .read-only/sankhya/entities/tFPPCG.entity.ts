import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';

@Index('PK_TFPPCG', ['codcargo', 'codperfil', 'dtinicio'], { unique: true })
@Entity('TFPPCG', { schema: 'SANKHYA' })
export class TfppcgEntity {
  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('char', { name: 'TIPOPERIODO', length: 1, default: () => "'M'" })
  tipoperiodo: string;

  @Column('int', { name: 'PERIODICIDADE', nullable: true })
  periodicidade: number | null;

  @Column('char', { name: 'IMPRESCINDIVEL', length: 1, default: () => "'N'" })
  imprescindivel: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tfppcgs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppcgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tfppcgs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;
}
