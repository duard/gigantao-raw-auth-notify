import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsreqEntity } from './tRSREQ.entity';
import { TfpperEntity } from './tFPPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRSPER', ['nurequisicao', 'codperfil'], { unique: true })
@Entity('TRSPER', { schema: 'SANKHYA' })
export class TrsperEntity {
  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('int', { name: 'PESO', nullable: true })
  peso: number | null;

  @Column('char', { name: 'IMPRESCINDIVEL', length: 1, default: () => "'N'" })
  imprescindivel: string;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.trspers)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao2: TrsreqEntity;

  @ManyToOne(() => TfpperEntity, (tfpperEntity) => tfpperEntity.trspers)
  @JoinColumn([{ name: 'CODPERFIL', referencedColumnName: 'codperfil' }])
  codperfil2: TfpperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trspers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
