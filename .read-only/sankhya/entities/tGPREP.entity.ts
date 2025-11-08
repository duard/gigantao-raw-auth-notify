import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { TgpnvcEntity } from './tGPNVC.entity';

@Index('PK_TGPREP', ['codcargo', 'codfuncao', 'codperfil', 'codnivel'], {
  unique: true,
})
@Entity('TGPREP', { schema: 'SANKHYA' })
export class TgprepEntity {
  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { primary: true, name: 'CODNIVEL' })
  codnivel: number;

  @Column('int', { name: 'REPRESEN' })
  represen: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpreps)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpreps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.tgpreps)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tgpreps)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;

  @ManyToOne(() => TgpnvcEntity, (tgpnvcEntity) => tgpnvcEntity.tgpreps)
  @JoinColumn([
    { name: 'CODCARGO', referencedColumnName: 'codcargo' },
    { name: 'CODNIVEL', referencedColumnName: 'codnivel' },
  ])
  tgpnvc: TgpnvcEntity;
}
