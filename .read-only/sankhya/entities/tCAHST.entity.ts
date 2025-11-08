import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcacprEntity } from './tCACPR.entity';

@Index('PK_TCAHST', ['nucurso', 'dtalter', 'codusu'], { unique: true })
@Entity('TCAHST', { schema: 'SANKHYA' })
export class TcahstEntity {
  @Column('int', { primary: true, name: 'NUCURSO' })
  nucurso: number;

  @Column('datetime', { primary: true, name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { name: 'ETAPA' })
  etapa: number;

  @Column('varchar', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 250 })
  email: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcahsts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TcacprEntity, (tcacprEntity) => tcacprEntity.tcahsts)
  @JoinColumn([{ name: 'NUCURSO', referencedColumnName: 'nucurso' }])
  nucurso2: TcacprEntity;
}
