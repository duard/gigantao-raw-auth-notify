import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgpprcEntity } from './tGPPRC.entity';
import { TgptarEntity } from './tGPTAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPTPR', ['codtarefa', 'codprocedimento', 'dtinicio'], {
  unique: true,
})
@Entity('TGPTPR', { schema: 'SANKHYA' })
export class TgptprEntity {
  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('int', { primary: true, name: 'CODPROCEDIMENTO' })
  codprocedimento: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', {
    primary: true,
    name: 'DTINICIO',
    default: () => 'getdate()',
  })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @ManyToOne(() => TgpprcEntity, (tgpprcEntity) => tgpprcEntity.tgptprs)
  @JoinColumn([
    { name: 'CODPROCEDIMENTO', referencedColumnName: 'codprocedimento' },
  ])
  codprocedimento2: TgpprcEntity;

  @ManyToOne(() => TgptarEntity, (tgptarEntity) => tgptarEntity.tgptprs)
  @JoinColumn([{ name: 'CODTAREFA', referencedColumnName: 'codtarefa' }])
  codtarefa2: TgptarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgptprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
